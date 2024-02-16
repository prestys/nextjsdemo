import { Inter } from "next/font/google";
import "../assets/css/globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { createTheme, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <title>My awesome title</title>
            <ColorSchemeScript />
        </head>
        <body className={inter.className}>
            <MantineProvider defaultColorScheme="dark">
                {children}
            </MantineProvider>
        </body>
    </html>
  );
}
