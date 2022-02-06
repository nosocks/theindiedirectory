import { useMemo } from 'react'

export default ({ children, onClick = () => {}, type = 'primary' }) => {
  const buttonClasses = useMemo(() => {
    switch (type) {
      case 'secondary':
        return 'text-coral-700 bg-coral-100 hover:bg-coral-200'
      default:
        return 'text-bleu-700 bg-bleu-100 hover:bg-bleu-200'
    }
  }, [type])

  return (
    <button
      type="button"
      className={`
        inline-flex rounded-full shadow-sm items-center font-bold px-3.5 py-2 border
        border-transparent text-sm leading-4 focus:outline-none transition-all
        duration-200 ease-in-out ${buttonClasses}
      `}
      onClick={onClick}
    >
      {children ?? 'text'}
    </button>
  )
}
