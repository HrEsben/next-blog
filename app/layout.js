import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Chatbot from '@/components/chatbot'
import CookiesWrapper from '@/components/CookieWrapper';
import useServerDarkMode from '@/hooks/use-server-dark-mode';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | Esben Stephansen',
default: 'Esben Stephansen'
  },
  description: "A tutorial for the future",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode('dark')
  return (
    <html lang="en" className={`${roboto.className} ${theme}`}>
      <body>
       <CookiesWrapper>
        <Header theme={theme}/>
        <main className="mt-12">
          {children}
        </main>
        <Chatbot />
    </CookiesWrapper>
      </body>
    </html>
  );
}
