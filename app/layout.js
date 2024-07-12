import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first NextJS page</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
