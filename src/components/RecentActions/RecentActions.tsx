import { Error } from '@/components/Error'
import { getTransactions } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const RecentActions = () => {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions
  })

  return (
    <div>
      <h2>Recent Actions</h2>
      {data?.map(({ amount }) => (
        <span>{amount}</span>
      ))}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
