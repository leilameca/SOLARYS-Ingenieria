import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "SOLARYS Ingeniería | Energía Solar y Bombeo",
  description:
    "SOLARYS Ingeniería diseña, instala y respalda proyectos de energía solar, bombeo solar y electromecánica con enfoque técnico.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
