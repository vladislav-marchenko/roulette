import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

interface StarsInputProps {
  value: number
  setValue: Dispatch<SetStateAction<number>>
}

export const StarsInput: FC<StarsInputProps> = ({ value, setValue }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const decimal = newValue.split('.')[1] ?? ''

    if (decimal.length > 2) return
    setValue(Math.min(+newValue, 99999))
  }

  return (
    <div className='flex flex-auto items-center text-4xl font-bold'>
      <input
        id='deposit-value'
        type='number'
        value={String(value)}
        onChange={onChange}
        placeholder='0'
        autoFocus
        className='text-center outline-none focus:outline-none'
        style={{ width: value.toString().length + 0.5 + 'ch' }}
      />
      <label
        className='flex-auto cursor-text gap-2 text-neutral-400'
        htmlFor='deposit-value'
      >
        Stars
      </label>
    </div>
  )
}
