import { Layout } from '@/components/Layout'
import { getPaddingTop } from '@/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRoute } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 }
  }
})

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Layout />
      <ReactQueryDevtools />
      <Toaster
        richColors
        position='top-center'
        mobileOffset={{ top: getPaddingTop() + 16 }}
        offset={{ top: getPaddingTop() + 16 }}
      />
      <Analytics />
    </QueryClientProvider>
  )
})
