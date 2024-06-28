import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import CoreLayout from '@/components/layout/core-layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-poppins' })

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
      <body className={inter.className + 'bg-blue-500'}>
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  )
}
