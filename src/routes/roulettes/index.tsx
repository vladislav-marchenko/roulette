import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { RoulettesContent } from '@/components/Roulettes/RoulettesContent'
import { RoulettesSkeleton } from '@/components/Roulettes/RoulettesSkeleton'
import { getRoulettes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/roulettes/')({
  component: RouteComponent
})

function RouteComponent() {
  const { t } = useTranslation()
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['roulettes'],
    queryFn: getRoulettes
  })

  const isEmpty = !data?.length

  if (isError) {
    return <Error error={error} refetch={refetch} className='flex-auto' />
  }

  if (isSuccess && isEmpty) {
    return <Empty title={t('play.empty')} className='flex-auto' />
  }

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]'>
      {isSuccess && <RoulettesContent roulettes={data} />}
      {isLoading && <RoulettesSkeleton />}
    </div>
  )
}
