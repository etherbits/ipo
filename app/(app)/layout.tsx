import MobileActionBar from "@/components/ui/mobileActionBar";
import { getPageSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getPageSession();
  if (!session) redirect("/sign-in");

  return (
    <>
      {children}
      <MobileActionBar />
    </>
  );
}
