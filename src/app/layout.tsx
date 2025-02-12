import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "25Reg",
  description: "Simple two steps registration form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{
          // default font
          fontFamily: 'var(--font-geist-sans)',
        }}
      >
        {children}
      </body>
    </html>
  );
}