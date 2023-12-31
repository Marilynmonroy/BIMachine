import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "signup",
  description: "BiMachine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="biM-theme" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
