import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'anna cotta | Pastelería',
  description: 'Panificados y pastelería artesanal de calidad',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-AR'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
