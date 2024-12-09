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
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL || 'https://covelitein-hub.vercel.app/'}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "CoveliteinsHub - Your Gateway to Innovation",
  description:
    "CoveliteHub provides state-of-the-art solutions for businesses, empowering innovation and growth with cutting-edge technology and seamless user experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "CoveliteinsHub - Empowering Businesses",
    description:
      "Explore CoveliteinsHub's innovative solutions to transform your business. Seamlessly crafted for desktop and mobile platforms.",
    type: "website",
    images: [
      {
        url: "/imgs/l.jpg",
        width: 1200,
        height: 630,
        alt: "CoveliteinsHub - Empowering Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoveliteinsHub - Your Gateway to Innovation",
    description:
      "Discover how CoveliteinsHub empowers businesses with innovative solutions, cutting-edge technology, and seamless user experiences.",
    images: ["/imgs/l.jpg"],
  },
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
