import { Header } from './Header'
import { Navigation } from './Navigation'
import { auth } from '@/services/api'
import { getPaddingTop } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { Outlet } from '@tanstack/react-router'

export const Layout = () => {
  useQuery({ queryKey: ['auth'], queryFn: auth, staleTime: Infinity })

  return (
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
  )
}
