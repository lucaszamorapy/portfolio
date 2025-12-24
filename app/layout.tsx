import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Toaster } from "sonner";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});
export const metadata: Metadata = {
  title: "Lucas Zamora Portfólio",
  description: "Home da página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${cinzel.variable} antialiased`}>
        <Header>{children}</Header>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
