import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProviderContext from "@/components/SessionProviderContext";
import { Session } from "next-auth";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/Theme-Provider";
import { config } from "../../config";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MadeWith from "@/components/MadeWith";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.title}`,
    default: config.title, // a default is required when creating a template
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {
    google: config.googleVerification,
    yandex: config.yandexVerification,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics GA_TRACKING_ID={config.googleAnalyticsId} />
      </Head>
      <body className={inter.className + " bg-white"}>
        <Toaster position="top-right" />
        <SessionProviderContext>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            
            disableTransitionOnChange
          >
                      <Navbar />

            {children}
            <Footer />
            <MadeWith />
          </ThemeProvider>
        </SessionProviderContext>
        <script src="https://salespopup.io/api/script.js?website=saasunderone.com" async defer></script>

      </body>
    </html>
  );
}
