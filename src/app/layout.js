import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'F=Math',
  description: 'The taste of math your child needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="any" href="f=mathlogoF.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
