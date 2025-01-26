import "@/app/globals.css"
import Footer from "@/components/footer";
import { ThemeProvider } from "@/lib/providers/theme-provider"

export const metadata = {
  title: "ohAlee - Full Stack Developer",
  description: "Full stack developer.",
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-black pt-4">
          {children}
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
    </body>
    </html>
  )
}

