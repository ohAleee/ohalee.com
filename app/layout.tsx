import "@/app/globals.css"
import { ThemeToggle } from "@/components/theme-switcher"
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
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle/>
      </div>
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}

