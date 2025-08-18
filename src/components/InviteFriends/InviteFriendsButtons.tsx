import { Button } from '@/components/Button'
import type { FC } from 'react'
import { toast } from 'sonner'

const copy = (text: string) => {
  navigator.clipboard.writeText(text)
  toast.success('Copied to clipboard')
}

export const InviteFriendsButtons: FC<{ url: string }> = ({ url }) => {
  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='secondary'
        onClick={() => copy(url)}
        className='flex-auto'
      >
        Copy link
      </Button>
      <Button href={`https://t.me/share/url?url=${url}`} className='flex-auto'>
        Share
      </Button>
    </div>
  )
}
