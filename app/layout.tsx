import { Analytics } from '@/components/Analytics';
import Header from '@/components/Header';
import { getCurrentUser } from '@/lib/session';
import { Toaster } from '@/ui/toast';
import { Raleway, Bitter } from '@next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
const bitter = Bitter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html
      lang='en'
      className={`bg-zinc-800 text-zinc-100 antialiased ${bitter.className} ${raleway.variable}`}
    >
      <head />
      <body className='min-h-screen'>
        <Toaster />
        <Header />
        <main className='mx-3'>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
