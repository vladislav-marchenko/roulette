import { cn } from '@/utils'
import WebApp from '@twa-dev/sdk'
import { useState, type FC, type ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Drawer as VaulDrawer } from 'vaul'

interface DrawerProps {
  children: ReactNode
  trigger: ReactNode
  open?: boolean
  onOpenChange?: (isOpen: boolean) => void
  title?: string
  description?: string
  className?: string
  minHeightPercent?: number
}

export const Drawer: FC<DrawerProps> = ({
  children,
  trigger,
  open,
  onOpenChange,
  title,
  description,
  className,
  minHeightPercent
}) => {
  // Store the initial safeAreaInset.bottom value on mount.
  // This is used for consistent bottom padding in the Drawer,
  // preventing layout shifts when the keyboard opens.
  const [safeBottom] = useState(WebApp.safeAreaInset.bottom)

  return (
    <VaulDrawer.Root
      open={open}
      onOpenChange={onOpenChange}
      disablePreventScroll={false}
    >
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className='fixed inset-0 z-30 bg-neutral-800/50 backdrop-blur-md' />
        <VaulDrawer.Content
          className='fixed right-0 bottom-0 left-0 z-50 flex max-h-11/12 flex-col rounded-t-3xl bg-neutral-800 shadow-2xl shadow-black outline-none'
          style={{
            minHeight: `${minHeightPercent}%`,
            paddingBottom: safeBottom + 'px'
          }}
        >
          <div className='px-4 py-2'>
            <div className='mx-auto h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300' />
            {title && (
              <VaulDrawer.Title className='text-center text-lg font-bold'>
                {title}
              </VaulDrawer.Title>
            )}
            {description && (
              <VaulDrawer.Description className='text-center text-sm font-medium text-neutral-200'>
                {description}
              </VaulDrawer.Description>
            )}
            <VaulDrawer.Close className='absolute top-0 right-0 cursor-pointer p-4'>
              <AiOutlineClose size={20} />
            </VaulDrawer.Close>
          </div>
          <div className={cn('flex-auto overflow-y-auto p-4 pt-0', className)}>
            {children}
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  )
}
