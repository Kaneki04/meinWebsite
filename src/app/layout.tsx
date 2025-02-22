import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/ui/appBar/appBar";
import Footer from "@/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Vicken",
  description: "Personal Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-[#090f1b]">
        <AppBar />
        <div className="pb-20 "> 
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
