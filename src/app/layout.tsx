
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: "ِشركة AWH| تطوير برمجيات ",
  description: "مطور ويب وموبايل محترف متخصص في Next.js وFlutter. خدمات تطوير المواقع الإلكترونية، تطبيقات الجوال، لوحات تحكم Power BI، وحلول برمجية متكاملة.",
  keywords: "مطور برمجيات، تطوير مواقع، تطبيقات موبايل، Next.js، Flutter، Power BI، محمد عبه، Yemen developer",
  author: "محمد يحي عبه",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "محمد يحي عبه | مطور برمجيات محترف",
    description: "مطور ويب وموبايل محترف متخصص في Next.js وFlutter",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "محمد يحي عبه | مطور برمجيات محترف",
    description: "مطور ويب وموبايل محترف متخصص في Next.js وFlutter",
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
