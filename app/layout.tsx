import type { Metadata } from "next";
import "./globals.css";

const rawSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;
const siteOrigin = new URL(siteUrl).origin;

const seoTitle =
  'Tải file/folder Google Drive bị chặn tải xuống View Only';
const seoDescription =
  'G-Drive Advanced Downloader hỗ trợ tải file/folder trên Google Drive bị chặn quyền tải xuống "View only", dành cho dữ liệu bạn sở hữu hoặc được cấp quyền truy cập hợp lệ.';
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const previewImage = `${basePath}/og-image.png`;
const driveIcon = `${basePath}/google-drive-icon.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: "G-Drive Advanced Downloader",
  title: {
    default: `${seoTitle} | G-Drive Advanced Downloader`,
    template: "%s | G-Drive Advanced Downloader"
  },
  description: seoDescription,
  keywords: [
    "tải file google drive view only",
    "tải folder google drive view only",
    "tải file google drive bị chặn tải xuống",
    "tải folder google drive bị chặn tải xuống",
    "download google drive view only",
    "google drive bị tắt nút download",
    "G-Drive Advanced Downloader"
  ],
  category: "software",
  alternates: {
    canonical: `${basePath}/`
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: `${basePath}/`,
    siteName: "G-Drive Advanced Downloader",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: seoTitle
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [previewImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: driveIcon,
    shortcut: driveIcon,
    apple: driveIcon
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
