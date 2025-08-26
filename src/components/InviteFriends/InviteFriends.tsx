import { InviteFriendsBanner } from './InviteFriendsBanner'
import { InviteFriendsButtons } from './InviteFriendsButtons'
import { InviteFriendsInfo } from './InviteFriendsInfo'
import { InviteFriendsStats } from './InviteFriendsStats'
import { Drawer } from '@/components/Drawer'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import type { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

export const InviteFriends = () => {
  const { t } = useTranslation()
  const { data } = useQuery({ queryKey: ['me'], queryFn: getMe })

  const url = `https://t.me/giftica_bot/?startapp=ref_${data?.referralCode}`

  const onClick = (event: MouseEvent<HTMLInputElement>) => {
    event.currentTarget.select()
  }

  const onSelect = (event: MouseEvent<HTMLInputElement>) => {
    const target = event.currentTarget
    target.setSelectionRange(0, target.value.length)
  }

  return (
    <Drawer
      title={t('profile.invite.banner.title')}
      trigger={<InviteFriendsBanner />}
      className='flex h-full flex-col gap-6'
    >
      <InviteFriendsInfo />
      <InviteFriendsStats />
      <div className='flex flex-col gap-1'>
        <h5>{t('profile.invite.linkLabel')}</h5>
        <input
          value={url}
          readOnly
          onClick={onClick}
          onSelect={onSelect}
          className='w-full flex-auto truncate rounded-lg border border-neutral-600 px-2 py-1.5 text-sm text-neutral-200 transition-colors duration-200 select-text hover:text-white'
        />
      </div>
      <InviteFriendsButtons url={url} />
    </Drawer>
  )
}
