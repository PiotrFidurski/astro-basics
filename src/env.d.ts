/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_PRODUCTION_URL: string;
  readonly API_DEVELOPMENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
