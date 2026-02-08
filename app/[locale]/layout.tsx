import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Playfair_Display, Montserrat } from "next/font/google"; // Import fonts
import "../globals.css";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const playfair = Playfair_Display({
    variable: "--font-display",
    subsets: ["latin"],
    display: "swap",
});

const montserrat = Montserrat({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${playfair.variable} ${montserrat.variable} antialiased bg-[#F8F5F2] text-[#1E1E1E]`}>
                <NextIntlClientProvider messages={messages}>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        {/* Remove top padding on main because header is transparent on top of content (Home/Video) */}
                        {/* But add it for other pages via component-specific padding or spacing if needed. */}
                        {/* Actually, most pages have a dark background and need to start from top. */}
                        {/* But add it for other pages via component-specific padding or spacing if needed. */}
                        {/* Actually, most pages have a dark background and need to start from top. */}
                        {/* Let's remove pt-20 here and handle spacing in pages to allow hero sections to go under header per design */}
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
