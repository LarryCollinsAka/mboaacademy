/**
 * Redis Client helper for Mboa Academy
 * Handles cache for AI summaries, lesson notes auto-save debouncing, and sessions
 */

export class RedisService {
  private memoryCache: Map<string, { value: string; expiry: number }> = new Map();

  async get(key: string): Promise<string | null> {
    const item = this.memoryCache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiry) {
      this.memoryCache.delete(key);
      return null;
    }
    return item.value;
  }

  async set(key: string, value: string, ttlSeconds: number = 3600): Promise<void> {
    this.memoryCache.set(key, {
      value,
      expiry: Date.now() + ttlSeconds * 1000,
    });
  }

  async del(key: string): Promise<void> {
    this.memoryCache.delete(key);
  }
}

export const redisService = new RedisService();
