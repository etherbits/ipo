import MobileActionBar from "@/components/ui/mobileActionBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MobileActionBar />
    </>
  );
}
