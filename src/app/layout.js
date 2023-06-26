import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'F=Math',
  description: 'Non-profit math competition prep.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Non-profit Math Competition Prep Classes" />
        <meta name="keywords" content="F=Math, Math, Math Competition, Math Competition Prep, F equals math, Fequalsmath, AMC, AIME, AMC Class, AIME Class" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="any" href="f=mathlogoF.png"/>
    </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
