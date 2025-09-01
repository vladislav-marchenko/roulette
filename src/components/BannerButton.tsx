import type { FC, ReactNode } from 'react'

export const BannerButton: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='rounded-md bg-white px-2 py-1.5 text-xs font-bold text-black shadow-2xl'>
      {children}
    </div>
  )
}
