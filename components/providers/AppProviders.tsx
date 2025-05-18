
"use client"
import NextTopLoader from "nextjs-toploader"
import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export function AppProviders({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <NextTopLoader color="#10b981" showSpinner={false} />
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
            <ReactQueryDevtools  />
        </QueryClientProvider>
    )
}
