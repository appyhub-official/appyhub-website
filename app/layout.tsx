import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css'
import Footer from './sections/Footer';
import CookiesPopup from './components/CookiesPopup';

const font = Montserrat({ 
    weight: '300',
    subsets: ['latin']
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover'
};

export const metadata: Metadata = {
    title: 'AppyHub',
    description: 'Tworzymy aplikacje wspierające Twój biznes. Nasze kompleksowe rozwiązania programistyczne są dostosowane do różnych potrzeb. Nasza firma wyróżnia się profesjonalną obsługą i dedykowanym podejściem do każdego klienta.',
    authors: [{
        name: 'Hubert Kozik | AppyHub'
    }],
    keywords: 'firma programistyczna, tworzenie stron internetowych, aplikacje na telefon, aplikacje mobilne, aplikacje internetowe, programowanie mobilne, programowanie webowe, agencja internetowa, agencja web development, outsourcing IT, grafik, grafika, projektowanie graficzne'
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang='pl'>
        <body className={font.className}>
            <CookiesPopup />
            {children}
            <Footer />
        </body>
        </html>
    )
}