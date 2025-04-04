import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Chatbot from '@/components/chatbot'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "My fancy blog",
  description: "A tutorial for the future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <main className="mt-12">
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  );
}
