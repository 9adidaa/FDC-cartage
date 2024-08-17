require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
export const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://cartageback-bcc7g6gpb8gzaqh6.italynorth-01.azurewebsites.net/api/v1";

export const MEDIA_PROVIDER_URL =
  process.env.MEDIA_PROVIDER_URL || "https://cartageback-bcc7g6gpb8gzaqh6.italynorth-01.azurewebsites.net";

export const GOOGLE_RECAPTCHA_SITE_KEY = process.env.GOOGLE_RECAPTCHA_SITE_KEY;

export const HOST_NAME = process.env.HOST_NAME || "http://localhost:3000";

export const PORT = process.env.PORT || 3000;

export const UNDER_CONSTRUCTION = process.env.UNDER_CONSTRUCTION ? true : false;
