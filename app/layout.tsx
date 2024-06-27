import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CoreLayout from '@/components/layout/core-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Application Sidebar Layout for using flex',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  )
}
