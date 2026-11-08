import { useId } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export type PollOption = { id: string; label: string; votes: number }
const percent = new Intl.NumberFormat('es-VE', { style: 'percent' })

export function SocialPoll({ question, options, selectedId, showResults = selectedId !== null, onVote }: {
  question: string
  options: readonly PollOption[]
  selectedId: string | null
  showResults?: boolean
  onVote: (id: string) => void
}) {
  const titleId = useId()
  const total = options.reduce((sum, option) => sum + option.votes, 0)
  return (
    <Card role="group" aria-labelledby={titleId} className="sb-social-card">
      <span className="sb-social-kicker">Votación</span>
      <h3 id={titleId}>{question}</h3>
      <div className="grid gap-2">
        {options.map(({ id, label, votes }) => {
          const fraction = total > 0 ? votes / total : 0
          return (
            <Button
              key={id}
              type="button"
              variant="outline"
              aria-pressed={selectedId === id}
              className="sb-social-option"
              onClick={() => onVote(id)}
            >
              {showResults && <span className="sb-social-fill" style={{ width: `${fraction * 100}%` }} aria-hidden="true" />}
              <span>{label}</span>
              {selectedId === id && <Check className="text-primary" aria-hidden="true" />}
              {showResults && <span className="sb-social-count">{percent.format(fraction)}</span>}
            </Button>
          )
        })}
      </div>
      <p className="sb-helper" role="status">{showResults ? `${total} ${total === 1 ? 'voto' : 'votos'}` : 'Elige una opción para ver los resultados.'}</p>
    </Card>
  )
}
