import { permanentRedirect } from "next/navigation";

export default function AccountSettings() {
  return permanentRedirect(`/account`);
}
