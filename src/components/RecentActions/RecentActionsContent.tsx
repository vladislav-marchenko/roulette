import { RecentActionsItem } from './RecentActionsItem'
import type { Transaction } from '@/types/api'
import type { FC } from 'react'

export const RecentActionsContent: FC<{ transactions: Transaction[] }> = ({
  transactions
}) => {
  return transactions.map((transaction) => (
    <RecentActionsItem key={transaction._id} {...transaction} />
  ))
}
