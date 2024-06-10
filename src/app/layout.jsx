import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Context API",
  description: "The full use case of context api using global state. Hooks used includes useState, useEffect, useContext. LocalStorage is also used to store data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>

        <Navbar />
        {children}
        </SidebarProvider>
        </body>
    </html>
  );
}
