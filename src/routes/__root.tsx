import { Navigation } from '@/components/Navigation'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex h-full flex-col'>
        <main className='flex-auto'>
          <Outlet />
        </main>
        <Navigation />
      </div>
      <TanStackRouterDevtools />
    </>
  )
})
