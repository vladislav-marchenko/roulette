import { getRoulette } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const RouletteTitle = () => {
  const { t } = useTranslation()
  const { id } = useParams({ from: '/roulettes/$id' })

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['roulette', id],
    queryFn: () => getRoulette(id),
    enabled: !!id
  })

  if (isLoading) {
    return <div className='skeleton h-5 w-28' />
  }

  if (!isSuccess) return

  return (
    <h1 className='text-2xl leading-none font-bold md:text-center'>
      {t(`play.cases.${data.code}`)}
    </h1>
  )
}
