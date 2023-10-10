import './css/style.css';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import WhatsLogo from '@/public/images/whatsapp-logo.png'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata = {
  title: 'Miguel Rodrigues - Portfolio',
  description: 'Desenvolvedor de software FullStack com ampla experiência',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="pt-br">
        <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
          <div className="flex flex-col min-h-screen overflow-hidden">
          <div className="fixed right-0 bottom-0 z-50">
          </div>
            {children}
          </div>
        </body>
      </html>
    </>
  );
}