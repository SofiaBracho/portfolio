import { useId } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export type SocialComment = { id: string; author: string; initials: string; text: string }

export function CommentThread({ prompt, comments, draft, onDraftChange, onPublish }: {
  prompt: string
  comments: readonly SocialComment[]
  draft: string
  onDraftChange: (text: string) => void
  onPublish: (text: string) => void
}) {
  const titleId = useId()
  const inputId = useId()
  const message = draft.trim()
  return (
    <Card role="region" aria-labelledby={titleId} className="sb-social-card">
      <span className="sb-social-kicker">Conversación</span>
      <h3 id={titleId}>{prompt}</h3>
      <div role="log" aria-label="Comentarios publicados" className="grid gap-3">
        {comments.length === 0 && <p className="sb-helper">Abre la conversación con tu experiencia.</p>}
        {comments.map(({ id, author, initials, text }) => (
          <article key={id} className="sb-social-comment">
            <Avatar aria-hidden="true"><AvatarFallback>{initials}</AvatarFallback></Avatar>
            <div className="grid min-w-0 gap-1">
              <strong>{author}</strong>
              <Bubble variant="secondary"><BubbleContent>{text}</BubbleContent></Bubble>
            </div>
          </article>
        ))}
      </div>
      <form className="grid gap-2" onSubmit={(event) => {
        event.preventDefault()
        if (message) onPublish(message)
      }}>
        <Label htmlFor={inputId}>Tu comentario</Label>
        <Textarea
          id={inputId}
          className="sb-textarea"
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          placeholder="Comparte algo que hayas probado…"
        />
        <Button type="submit" className="sb-social-publish" disabled={!message}>Comentar</Button>
      </form>
    </Card>
  )
}
