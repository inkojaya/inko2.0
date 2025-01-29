import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { ThemeProvider } from 'next-themes';
import ThemeCom from './components/ThemeCom';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Inko Jaya Konstruksi',
  description: 'Electrical Equipment & Machinary & Construction in Indonesia ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeCom>
            <Header />
            {children}
          </ThemeCom>
        </ThemeProvider>
      </body>
    </html>
  );
}
