import { Star } from '../Icons'
import { InviteFriendsStatsItem } from './InviteFriendsStatsItem'
import { getReferralStats } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { IoPeopleCircle, IoWallet } from 'react-icons/io5'

export const InviteFriendsStats = () => {
  const { t } = useTranslation()
  const { data, isSuccess } = useQuery({
    queryKey: ['stats'],
    queryFn: getReferralStats
  })

  return (
    <div className='flex items-center gap-4 divide-x divide-neutral-700 border-b border-neutral-700 pb-4'>
      <InviteFriendsStatsItem
        title={t('profile.invite.stats.earned')}
        icon={IoWallet}
        color='#49df64'
      >
        <div className='flex items-center gap-1'>
          {isSuccess && (
            <span className='text-lg font-bold'>{data.earned}</span>
          )}
          {!isSuccess && <div className='skeleton h-4 w-12 rounded-md' />}
          <Star size={12} />
        </div>
      </InviteFriendsStatsItem>
      <InviteFriendsStatsItem
        title={t('profile.invite.stats.referrals')}
        icon={IoPeopleCircle}
        color='#af51de'
      >
        {isSuccess && <span className='text-lg font-bold'>{data.amount}</span>}
        {!isSuccess && <div className='skeleton h-4 w-12 rounded-md' />}
      </InviteFriendsStatsItem>
    </div>
  )
}
