import { routing } from "./routing";
import messages from "./translations/en.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
    Locale: (typeof routing.locales)[number];
  }
}
