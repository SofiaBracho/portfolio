import { useId, type ReactNode } from 'react'
import { Card } from '@/components/ui/card'

export function PostCTA({ kicker, title, description, children }: {
  kicker: string
  title: string
  description: string
  children: ReactNode
}) {
  const titleId = useId()
  return (
    <Card role="region" aria-labelledby={titleId} className="sb-social-card sb-post-cta">
      <div className="grid gap-2">
        <span className="sb-social-kicker">{kicker}</span>
        <h3 id={titleId}>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="sb-post-cta-actions">{children}</div>
    </Card>
  )
}
