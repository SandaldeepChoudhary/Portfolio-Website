import { Outfit } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Next Theme
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sandaldeep",
  description: "Developed by Sandaldeep using Next Js",
  tags: [
    "sandaldeep",
    "sandaldeep choudhary",
    "sandaldeep's portfolio",
    "sandaldeep's profile website",
    "best developer of dharamshala",
    "best developer of palampur",
    "best developer of India",
    "best front-end developer of dharamshala",
    "best back-end developer of dharamshala",
    "best fullstack developer of dharamshala",
    "best front-end developer of palampur",
    "best back-end developer of palampur",
    "best fullstack developer of palampur",
    "best front-end developer of kangra",
    "best back-end developer of kangra",
    "best fullstack developer of kangra",
    "best developer of himachal pradesh",
    "full stack developer from kangra",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
