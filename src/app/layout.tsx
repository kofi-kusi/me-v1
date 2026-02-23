import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import "@/styles/globals.css";

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kofi Kusi",
    default: "Kofi Kusi Appau",
  },
  description: "Kofi Kusi's portfolio. View my projects and other works!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anonymousPro.variable}`}>
        <div className="max-w-xl mx-auto">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
