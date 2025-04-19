import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Providers } from "./providers"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Pokémon App",
  description: "A mobile Pokémon application",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="max-w-md mx-auto font-dm-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
