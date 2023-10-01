import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import MobileActionBar from "@/components/ui/mobileActionBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Ipo workout tracker/manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col bg-black px-6 py-5 text-slate-200",
          montserrat.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="mb-20">{children}</div>
        </ThemeProvider>
        <MobileActionBar />
      </body>
    </html>
  );
}
