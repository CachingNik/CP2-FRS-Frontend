import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export default function loggerInit() {
  Sentry.init({
    dsn: "Enter here your Sentry dsn",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
