import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Your go-to collaborative editor',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
        {children}
      </body>
    </html>
  );
} 
