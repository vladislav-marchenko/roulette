import { Star } from '@/components/Icons'
import { useTranslation } from 'react-i18next'

export const InviteFriendsInfo = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2'>
        <h2>{t('profile.invite.title')}</h2> <Star size={20} />
      </div>
      <p className='text-sm text-neutral-400'>
        {t('profile.invite.description')}
      </p>
    </div>
  )
}
