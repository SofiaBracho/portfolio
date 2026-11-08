import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export type Reaction = {
  id: string
  label: string
  icon: ReactNode
  count: number
  active?: boolean
}

export function ReactionBar({ label, reactions, onReact }: {
  label: string
  reactions: readonly Reaction[]
  onReact: (id: string) => void
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {reactions.map(({ id, label, icon, count, active = false }) => (
        <Button
          key={id}
          type="button"
          variant="outline"
          aria-pressed={active}
          className="sb-social-reaction"
          onClick={() => onReact(id)}
        >
          <span aria-hidden="true">{icon}</span>
          {label}
          <span className="sb-social-count">{count}</span>
        </Button>
      ))}
    </div>
  )
}
