import { deployBundle } from "@smol-frontend/deploy-cloudflare";
import dotenv from "dotenv";

dotenv.config({
  path: new URL(".env", import.meta.url).pathname,
});

await deployBundle({
  name: "ExampleSmolFrontend",
  contractVersion: "1.0.0",
  umdBundlePath: new URL(
    "../dist/example-smol-frontend.umd.js",
    import.meta.url
  ).pathname,
  cloudflare: {
    accountIdentifier: process.env.CF_ACCOUNT_IDENTIFIER,
    apiToken: process.env.CF_API_TOKEN,
    kvNamespaceIdentifier: process.env.CF_KV_NAMESPACE,
  },
});