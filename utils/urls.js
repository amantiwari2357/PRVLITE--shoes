export const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";

// Validation: Ensure API_URL and STRAPI_API_TOKEN are set
if (!API_URL) {
    console.error("⚠️ Warning: API_URL is not defined in environment variables!");
}

if (!STRAPI_API_TOKEN) {
    console.error("⚠️ Warning: STRAPI_API_TOKEN is not defined! API requests may fail.");
}
