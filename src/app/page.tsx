import { permanentRedirect } from "next/navigation";

export default function Homepage() {
  return permanentRedirect(`/dashboard`);
}
