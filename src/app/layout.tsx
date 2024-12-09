import type { Metadata } from "next";
import { NextUITheme } from "@/client_theme";
import localFont from "next/font/local";
import "./globals.css";
const openSans = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.woff2",
    },
  ],
});

export const metadata: Metadata = {
  title: "Covelitein || Home",
  description: "Agency landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NextUITheme>{children}</NextUITheme>
      </body>
    </html>
  );
}
