import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";
import { ThemeProvider } from "@/providers/theme-provider";
import AppStateProvider from "@/providers/state-provider";
import { Toaster } from "@/components/ui/toaster";
import { SupabaseUserProvider } from "@/providers/user-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LampStack",
  description: "A place for all to work and collaborate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // either use db or remove it
  // console.log(db);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SupabaseUserProvider>
            <AppStateProvider>
              {children}
              <Toaster />
            </AppStateProvider>
          </SupabaseUserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
