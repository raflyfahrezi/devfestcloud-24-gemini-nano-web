/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Metadata } from 'next'

import { Header } from '@/layouts'
import { Provider } from '@/components'

import './globals.css'

declare global {
  interface Window {
    ai: any
    translation: any
  }
}

export const metadata: Metadata = {
  title: 'Social Media',
  description: 'Gemini Nano Demo on Social Media Use Case',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <meta
        httpEquiv='origin-trial'
        content='Aoeg49e8gXziww8aMaciOT3ocfAg14TCdd6srBr0/ENCVaog72otR4Or4Qjz9qByZNGl2mbK/pxvft9j0jf8sw0AAABReyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiVHJhbnNsYXRpb25BUEkiLCJleHBpcnkiOjE3NTMxNDI0MDB9'
      />
      {/* <meta
        httpEquiv='origin-trial'
        content='ApywZEcawPu3bp6OLLTdoGZKtPjN5sKcNOYQ7FrAJbcOp/vfx7SNIZu8Zxj9gqcIPXzkGd5/KiS1HpvUvKee5gwAAABVeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiQUlTdW1tYXJpemF0aW9uQVBJIiwiZXhwaXJ5IjoxNzUzMTQyNDAwfQ=='
      /> */}
      <body className={`antialiased`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
