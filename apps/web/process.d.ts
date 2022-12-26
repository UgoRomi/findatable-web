declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    SHADOW_DATABASE_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    EMAIL_SERVER: string;
    EMAIL_FROM: string;
  }
}
