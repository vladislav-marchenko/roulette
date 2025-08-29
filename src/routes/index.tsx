import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { RoulettesContent } from '@/components/Roulettes/RoulettesContent'
import { RoulettesSkeleton } from '@/components/Roulettes/RoulettesSkeleton'
import { getRoulettes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['roulettes'],
    queryFn: getRoulettes
  })

  const isEmpty = !data?.length

  if (isError) {
    return <Error error={error} refetch={refetch} className='flex-auto' />
  }

  if (isSuccess && isEmpty) {
    // !!!! Empty title
    return <Empty title={'EMPTY'} className='flex-auto' />
  }

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(190px,1fr))]'>
      {isSuccess && <RoulettesContent roulettes={data} />}
      {isLoading && <RoulettesSkeleton />}
    </div>
  )
}
