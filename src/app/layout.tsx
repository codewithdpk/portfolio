import ThemeProvider from '@portfolio/theme/ThemeProvider'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={workSans.className}>
        <ThemeProvider>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
