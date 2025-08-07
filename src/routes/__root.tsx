import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex h-full min-h-dvh flex-col gap-4'>
        <div className='flex flex-auto flex-col gap-4 p-4'>
          <Header />
          <main className='flex-auto'>
            <Outlet />
          </main>
        </div>
        <Navigation />
      </div>
      <TanStackRouterDevtools />
    </>
  )
})
