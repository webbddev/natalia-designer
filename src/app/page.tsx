import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect to Romanian as default
  redirect("/ro");
}
