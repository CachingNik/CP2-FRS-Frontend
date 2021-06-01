import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export default function loggerInit() {
  Sentry.init({
    dsn: "https://2a564079ac1141e5adb71017fde0ac54@o769921.ingest.sentry.io/5795157",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
