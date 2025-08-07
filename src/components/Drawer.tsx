import { cn } from '@/utils'
import type { FC, ReactNode } from 'react'
import { Drawer as VaulDrawer } from 'vaul'

interface DrawerProps {
  children: ReactNode
  trigger: ReactNode
  title?: string
  className?: string
}

export const Drawer: FC<DrawerProps> = ({
  children,
  trigger,
  title,
  className
}) => {
  return (
    <VaulDrawer.Root>
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className='fixed inset-0 z-30 bg-black/40' />
        <VaulDrawer.Content className='fixed right-0 bottom-0 left-0 z-40 flex max-h-11/12 min-h-1/2 flex-col rounded-t-2xl bg-neutral-800 shadow-2xl shadow-black outline-none'>
          <div className='py-2'>
            <div className='mx-auto h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300' />
            {title && <h3 className='text-center'>{title}</h3>}
          </div>
          <div className={cn('flex-auto overflow-y-auto p-4', className)}>
            {children}
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  )
}
