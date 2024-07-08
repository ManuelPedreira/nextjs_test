import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const pages = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first NextJS page</title>
      </head>
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              {pages.map(({ label, route }) => 
                <li key={label}>
                  <Link href={route}>{label}</Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
