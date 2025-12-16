import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'HJB Engineering',
  description: 'Precision structural solutions for residential and commercial developments across British Columbia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${publicSans.className} bg-background-light dark:bg-background-dark text-[#0e141b] dark:text-slate-200`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
