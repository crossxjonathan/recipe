import { Inter } from "next/font/google";
import { Providers } from './provider';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mama Recipe",
  description: "Let's them cook by recipe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
