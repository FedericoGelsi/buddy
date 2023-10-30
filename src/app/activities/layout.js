import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ActivitiesLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`flex min-h-screen justify-center py-4 ${inter.className} bg-T600`}
      >
        {children}
      </body>
    </html>
  );
}
