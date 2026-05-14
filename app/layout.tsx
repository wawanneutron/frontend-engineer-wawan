import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import QueryProvider from '@/providers/query-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'User Operations',
  description: 'Frontend Engineer Take Home Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-linear-to-br from-slate-50 to-slate-100 text-slate-900 antialiased min-h-screen`}>
        <QueryProvider>
          <main className="mx-auto max-w-7xl space-y-8 p-4 md:p-8">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  )
}