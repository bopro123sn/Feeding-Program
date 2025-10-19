/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APIKEYS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
