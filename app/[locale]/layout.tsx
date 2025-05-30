import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import AppProvider from "@/components/AppProvider";
import Panel from "@/components/panel/Panel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function LocaleLayout({children, params}: { children: React.ReactNode; params: Promise<{locale: string}>;
}) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className="h-dvh overflow-y-auto">
        <body className={`${geistMono.variable} bg-body-bg-color light relative`}>
            <AppProvider>
                <NextIntlClientProvider locale={locale}>
                    {children}

                </NextIntlClientProvider>
            </AppProvider>
        </body>
        </html>
    );

}