import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raphael Ramm Portfolio',
  description: 'Portfolio of the fullstack Dev, Raphael Ramm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
