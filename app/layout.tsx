import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

// Lấy URL từ biến môi trường
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = rawSiteUrl.endsWith('/') ? rawSiteUrl.slice(0, -1) : rawSiteUrl;

export const metadata: Metadata = {
  title: "G-Drive Advanced Downloader",
  description: "Cung cấp giải pháp tải file Google Drive nâng cao",
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-L2MW24D2YG" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L2MW24D2YG');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
