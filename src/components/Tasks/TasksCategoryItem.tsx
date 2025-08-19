import { TasksCategoryItemButton } from './TasksCategoryItemButton'
import { Star } from '@/components/Icons'
import { taskIcons } from '@/consts'
import type { Task } from '@/types/api'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const hasCode = (code: string): code is keyof typeof taskIcons => {
  return code in taskIcons
}

const getTaskIcon = (code: string) => {
  if (hasCode(code)) return taskIcons[code]
  return taskIcons.default
}

export const TasksCategoryItem: FC<Task> = ({
  title,
  reward,
  code,
  isClaimed,
  isCompleted
}) => {
  const { t } = useTranslation()
  const { icon: Icon, color } = getTaskIcon(code)

  return (
    <div className='group flex items-start gap-1.5'>
      <div className='icon'>
        <Icon size={22} color={color} />
      </div>
      <div className='divider flex flex-auto items-center'>
        <div className='flex flex-auto flex-col'>
          <span className='text-sm leading-tight font-bold'>
            {t(`profile.tasks.items.${code}`, { defaultValue: title })}
          </span>
          <span className='flex items-center gap-1 text-sm font-medium'>
            {reward} <Star size={12} />
          </span>
        </div>
        <TasksCategoryItemButton
          isClaimed={isClaimed}
          isCompleted={isCompleted}
          code={code}
        />
      </div>
    </div>
  )
}
