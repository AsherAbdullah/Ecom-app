import type { Metadata } from "next";
import "./css/globals.css";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "traditional_cloths",
  description: "K.C CollecTion - A place for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
       <Layout>
         <Header />
         {children}
         <Footer />
       </Layout> 
      </body>
    </html>
  );
}
