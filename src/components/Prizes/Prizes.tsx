import { Error } from '../Error'
import { PrizesContent } from './PrizesContent'
import { PrizesSkeleton } from './PrizesSkeleton'
import { getPrizes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const Prizes = () => {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['prizes'],
    queryFn: getPrizes
  })

  return (
    <div className='flex w-full max-w-2xl flex-col gap-2 self-center'>
      <h2>Prizes</h2>
      <ul className='flex flex-col gap-4 rounded-xl bg-neutral-800 p-3'>
        {isSuccess && <PrizesContent prizes={data} />}
        {isLoading && <PrizesSkeleton />}
        {isError && <Error error={error} refetch={refetch} />}
      </ul>
    </div>
  )
}
