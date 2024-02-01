import clsx from 'clsx'

type Props = { className?: string }

export function Footer({ className }: Props) {
  return (
    <footer
      className={clsx(
        'rounded-xl bg-white p-4 flex justify-center items-center gap-4 shadow-card',
        className
      )}
    >
      <span className="text-lg text-neutral-500">Fake Store</span>
    </footer>
  )
}
