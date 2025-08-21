import { InviteFriendsBanner } from './InviteFriendsBanner'
import { InviteFriendsButtons } from './InviteFriendsButtons'
import { InviteFriendsInfo } from './InviteFriendsInfo'
import { Drawer } from '@/components/Drawer'
import { getMe } from '@/services/api'
import { copy } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

export const InviteFriends = () => {
  const { t } = useTranslation()
  const { data, isSuccess } = useQuery({ queryKey: ['me'], queryFn: getMe })
  if (!isSuccess) return

  const url = `https://t.me/giftica_bot/?startapp=ref_${data.referralCode}`

  const handleClick = () => {
    copy(url)
    toast.success(t('profile.invite.success'))
  }

  return (
    <Drawer
      title={t('profile.invite.banner.title')}
      trigger={<InviteFriendsBanner />}
    >
      <div className='flex h-full flex-col gap-6'>
        <InviteFriendsInfo />
        <div className='flex flex-col gap-1'>
          <h5>{t('profile.invite.linkLabel')}</h5>
          <div
            onClick={handleClick}
            className='w-full flex-auto truncate rounded-lg border border-neutral-600 px-2 py-1.5 text-sm text-neutral-200 transition-colors duration-200 select-text hover:text-white'
          >
            {url}
          </div>
        </div>
        <InviteFriendsButtons url={url} />
      </div>
    </Drawer>
  )
}
