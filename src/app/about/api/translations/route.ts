import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { DEFAULT_DICTIONARY } from "@/lib/dictionary";

// GET /api/translations?locale=fr
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  try {
    // 1. Fetch available active languages from PostgreSQL
    const languages = await db.language.findMany({
      where: { isActive: true },
      select: { code: true, name: true, nativeName: true, flag: true, isDefault: true },
    }).catch(() => []);

    // 2. Fetch all translations for the requested locale from PostgreSQL
    const dbTranslations = await db.translation.findMany({
      where: { locale },
      select: { namespace: true, key: true, value: true },
    }).catch(() => []);

    // 3. Format database translations into key-value map
    const dbDictionary: Record<string, string> = {};
    for (const item of dbTranslations) {
      const fullKey = item.namespace === "common" ? item.key : `${item.namespace}.${item.key}`;
      dbDictionary[fullKey] = item.value;
    }

    // 4. Merge with built-in dictionary fallback
    const fallbackDict = DEFAULT_DICTIONARY[locale] || DEFAULT_DICTIONARY["en"] || {};
    const merged = { ...fallbackDict, ...dbDictionary };

    return NextResponse.json({
      locale,
      translations: merged,
      languages: languages.length > 0 ? languages : [
        { code: "en", name: "English", flag: "🇬🇧", isDefault: true },
        { code: "fr", name: "Français", flag: "🇫🇷", isDefault: false },
      ],
    });
  } catch (error) {
    console.warn("[i18n API] Fallback to local dictionary:", error);
    return NextResponse.json({
      locale,
      translations: DEFAULT_DICTIONARY[locale] || DEFAULT_DICTIONARY["en"],
      languages: [
        { code: "en", name: "English", flag: "🇬🇧", isDefault: true },
        { code: "fr", name: "Français", flag: "🇫🇷", isDefault: false },
      ],
    });
  }
}

// POST /api/translations - Add new translation or new language without migration!
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { locale, languageName, flag, namespace = "common", key, value } = body;

    if (!locale) {
      return NextResponse.json({ error: "Locale is required" }, { status: 400 });
    }

    // Ensure language exists in Language table
    await db.language.upsert({
      where: { code: locale },
      update: { name: languageName || locale, flag: flag || "🌐" },
      create: {
        code: locale,
        name: languageName || locale,
        nativeName: languageName || locale,
        flag: flag || "🌐",
      },
    });

    if (key && value) {
      // Upsert translation
      const record = await db.translation.upsert({
        where: {
          locale_namespace_key: {
            locale,
            namespace,
            key,
          },
        },
        update: { value },
        create: {
          locale,
          namespace,
          key,
          value,
        },
      });
      return NextResponse.json({ success: true, translation: record });
    }

    return NextResponse.json({ success: true, message: `Language ${locale} registered successfully` });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
