import createClient from "openapi-fetch";
import qs from "qs";

import { env } from "@/env";

import type { paths } from "./strapi";

const token = env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const baseUrl  = `${env.NEXT_PUBLIC_STRAPI_API_URL}/api`

const client = createClient<paths>({
  baseUrl,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  querySerializer(params) {
    return qs.stringify(params, {
      encodeValuesOnly: true, // prettify URL
    });
  },

});
export { client };
