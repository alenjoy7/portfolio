import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alen Joy Portfolio | FullStack Developer",
  description:
    "Explore the portfolio of Alen Joy, a passionate full-stack developer specializing in modern web technologies, UI/UX, and responsive design.",
  keywords: [
    "Alen Joy",
    "portfolio",
    "full-stack developer",
    "web developer",
    "JavaScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Alen Joy" }],
  creator: "Alen Joy",
  openGraph: {
    title: "Alen Joy Portfolio | FullStack Developer",
    description:
      "Explore the portfolio of Alen Joy, a passionate full-stack developer specializing in modern web technologies, UI/UX, and responsive design.",
    url: "https://alenjoy.dev",
    siteName: "Alen Joy Portfolio",
    type: "website",
    images: [
      {
        url: "https://alenjoy.dev/sololeveling.png",
        width: 1200,
        height: 630,
        alt: "Alen Joy Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alen Joy",
    url: "https://alenjoy.dev",
    image: "https://alenjoy.dev/sololeveling.png",
    jobTitle: "FullStack Developer",
    sameAs: [
      "https://github.com/alenjoy7",
    ],
    description:
      "Explore the portfolio of Alen Joy, a passionate full-stack developer specializing in modern web technologies, UI/UX, and responsive design.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
