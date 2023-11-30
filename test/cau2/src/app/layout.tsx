import type { Metadata } from 'next'
import Header from '@/components/app.header'
import Footer from '@/components/app.footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Test for recruitery',
  description: 'Just test for recruitery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
