import { RecentActionsItemButton } from './RecentActionsItemButton'
import { RecentActionsItemDetails } from './RecentActionsItemDetails'
import { useInvoice } from '@/hooks/useInvoice'
import type { Action } from '@/types/api'
import type { FC } from 'react'

export const RecentActionsItem: FC<Action> = (props) => {
  const { handleInvoice } = useInvoice()

  if (props.status === 'pending' && props.invoiceLink) {
    return (
      <RecentActionsItemButton
        {...props}
        onClick={() => handleInvoice({ invoiceLink: props.invoiceLink })}
      />
    )
  }

  return <RecentActionsItemDetails {...props} />
}
