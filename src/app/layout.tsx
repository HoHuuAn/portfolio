import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hồ Hữu An | AI Portfolio",
  description:
    "Interactive portfolio powered by LLMs, built by Hồ Hữu An. Learn about my projects, skills, and AI engineering experience.",
  keywords: [
    "An Hồ",
    "Hồ Hữu An",
    "AI Engineer",
    "Portfolio",
    "LangChain",
    "LLM",
    "RAG",
    "Computer Vision",
    "Full Stack Developer",
    "Next.js",
    "React",
  ],
  authors: [
    {
      name: "Hồ Hữu An",
      url: "https://hohuuan.github.io",
    },
  ],
  creator: "Hồ Hữu An",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hohuuan.github.io",
    title: "Hồ Hữu An | AI Portfolio",
    description:
      "Explore the interactive portfolio of An – AI engineer specializing in LLM agents, Computer Vision, and full-stack development.",
    siteName: "An Hồ Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Hồ | AI Engineer",
    description:
      "Discover my interactive AI portfolio, real-world projects, and experience with LLMs, CV, and ML deployment.",
    creator: "@HoHuuAn", // if you don’t have Twitter, just remove this
  },
  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        sizes: "any",
      },
    ],
    shortcut: "/logo.jpeg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/logo.jpeg" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
