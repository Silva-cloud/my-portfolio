import type { Metadata } from "next";
import "./globals.css";
import Header from "./shared/components/header/Header";

// // -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "CV",
  description: "Zoalfakar Salman cv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` font-system  antialiased  `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
