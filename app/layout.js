import { AppContextProvider } from "@/context/AppContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./prism.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek - Adon Bhuiyah",
  description: "Chat with DeepSeek AI.",
  keywords: ["DeepSeek", "AI chatbot", "DeepSeek AI", "AI Assistant"],
  authors: [{ name: "Adon Bhuiyah", url: "https://adonr.dev" }],
  creator: "Adon Bhuiyah",
  publisher: "Adon Bhuiyah",
  category: "technology",
  applicationName: "DeepSeek",

  // 📱 Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "DeepSeek - Adon Bhuiyah",
    description: "Chat with DeepSeek AI.",

    siteName: "DeepSeek",

    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "DeepSeek - Adon Bhuiyah",
    description: "Chat with DeepSeek AI.",
  },

  // 📱 App Icons
  icons: {
    icon: "/favicon.svg",
  },

  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en" className="hydrated">
          <body className={`${inter.className} antialiased`}>
            <Toaster
              toastOptions={{
                success: { style: { background: "black", color: "white" } },
                error: { style: { background: "black", color: "white" } },
              }}
            />
            {children}
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
