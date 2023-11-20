import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Netflix",
  description: "A platform to relax and enjoy the emotions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
