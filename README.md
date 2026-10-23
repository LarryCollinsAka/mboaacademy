# HCIL Academy structured prompt patch

This patch is based on the uploaded `hcilacademy(1).zip`. It adds a prompt loader and feature prompts while preserving the existing `generateAIResponse` export. It does not change Prisma schema, migrations, authentication, or UI routes.

## Apply

Copy the `prompts/` folder into the project root and merge the provided `src/lib/ai/` files into the existing folder. The patch includes an updated `nvidia.ts`; back up the current file before replacing it.

## Important

- Do not put NVIDIA keys in prompts or client-side code.
- Call `generateFeatureResponse` only from server-side code after authenticating the user and checking permissions.
- Pass only course records and personal data that the user is allowed to see.
- This patch has not been compiled against your local project because the uploaded ZIP does not contain `package.json`, lockfile, or `tsconfig.json`. Run the project's type check/build after applying it.
