import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import WebApp from '@twa-dev/sdk'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

const getPaddingTop = () => {
  if (WebApp.isFullscreen) {
    return WebApp.safeAreaInset.top + 30
  }

  return WebApp.safeAreaInset.top
}

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div
        className='flex h-full min-h-dvh flex-col gap-4'
        style={{ paddingTop: getPaddingTop() + 'px' }}
      >
        <div className='flex flex-auto flex-col gap-4 p-4'>
          <Header />
          <main className='flex flex-auto flex-col'>
            <Outlet />
          </main>
        </div>
        <Navigation />
      </div>
      <ReactQueryDevtools />
      <Toaster
        richColors
        position='top-center'
        mobileOffset={{ top: getPaddingTop() + 16 }}
        offset={{ top: getPaddingTop() + 16 }}
      />
    </QueryClientProvider>
  )
})
