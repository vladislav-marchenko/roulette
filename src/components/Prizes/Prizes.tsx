import { PrizesContent } from './PrizesContent'
import { PrizesSkeleton } from './PrizesSkeleton'
import { Error } from '@/components/Error'
import { getRoulette } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Prizes = () => {
  const { t } = useTranslation()
  const { id } = useParams({ from: '/roulettes/$id' })

  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['roulette', id],
    queryFn: () => getRoulette(id),
    enabled: !!id
  })

  return (
    <div className='flex w-full max-w-2xl flex-col gap-2 self-center'>
      <h2>{t('play.prizes')}</h2>
      <ul className='flex flex-col gap-4 rounded-xl bg-neutral-800 p-3'>
        {isSuccess && <PrizesContent prizes={data.prizes} />}
        {isLoading && <PrizesSkeleton />}
        {isError && <Error error={error} refetch={refetch} />}
      </ul>
    </div>
  )
}
