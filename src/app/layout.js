import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buddy",
  description: "Protegiendo a nuestros pequeños en línea",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-B100`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
