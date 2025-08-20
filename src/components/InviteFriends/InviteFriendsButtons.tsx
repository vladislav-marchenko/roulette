import { Button } from '@/components/Button'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

const copy = (text: string) => navigator.clipboard.writeText(text)

export const InviteFriendsButtons: FC<{ url: string }> = ({ url }) => {
  const { t } = useTranslation()

  const handleClick = () => {
    copy(url)
    toast.success(t('profile.invite.success'))
  }

  return (
    <div className='flex items-center gap-2'>
      <Button variant='secondary' onClick={handleClick} className='flex-auto'>
        {t('profile.invite.buttons.copy')}
      </Button>
      <Button href={`https://t.me/share/url?url=${url}`} className='flex-auto'>
        {t('profile.invite.buttons.share')}
      </Button>
    </div>
  )
}
