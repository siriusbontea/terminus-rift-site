import type { ReactNode } from 'react'

type Variant = 'rules' | 'example' | 'tip' | 'warning'

const titleFor: Record<Variant, string> = {
  rules: 'Rule',
  example: 'Example',
  tip: 'Tip',
  warning: 'Warning',
}

export default function CalloutBox({
  variant = 'rules',
  title,
  children,
}: {
  variant?: Variant
  title?: string
  children: ReactNode
}) {
  return (
    <aside className={`callout callout--${variant}`}>
      <div className="callout__title">{title ?? titleFor[variant]}</div>
      <div>{children}</div>
    </aside>
  )
}
