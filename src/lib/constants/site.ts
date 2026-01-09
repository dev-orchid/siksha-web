export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Manas International Public School",
  shortName: process.env.NEXT_PUBLIC_APP_NAME?.split(" ").slice(0, 2).join(" ") || "Manas International",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;
