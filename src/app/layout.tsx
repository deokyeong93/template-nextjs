import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"

export const metadata: Metadata = {
  title: "템플릿",
  description: "템플릿 만들기",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
}

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.variable}>
        <main className="min-h-screen bg-background font-pretendard antialiased">
          {children}
        </main>
      </body>
    </html>
  )
}
