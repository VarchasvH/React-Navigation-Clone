import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Navigation Clone",
  description: "This is inspired by a simple website called React Navigation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-nav-gray">
      <body className={inter.className}>
        <div>
          <Navbar/>
        </div>
          {children}
      </body>
    </html>
  );
}
