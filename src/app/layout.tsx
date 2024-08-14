import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navegação/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emídio e Sá",
  description: "Emídio e sá, trata de sua saúde mental através da psicologia e do seu corpo através da massoterapia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
