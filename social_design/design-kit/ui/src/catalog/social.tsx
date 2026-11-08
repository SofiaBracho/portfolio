import { useState } from 'react'
import { Heart, Lightbulb, Sparkles } from 'lucide-react'
import { CommentThread, type SocialComment } from '@/components/social/comment-thread'
import { ReactionBar, type Reaction } from '@/components/social/reaction-bar'
import { SocialPoll, type PollOption } from '@/components/social/social-poll'
import type { Specimen } from '../component-catalog'
import { postCtas } from './post-cta'

const initialReactions: Reaction[] = [
  { id: 'like', label: 'Me gusta', icon: <Heart />, count: 12 },
  { id: 'idea', label: 'Buena idea', icon: <Lightbulb />, count: 6 },
  { id: 'try', label: 'Lo probaría', icon: <Sparkles />, count: 3 },
]

function ReactionsDemo() {
  const [reactions, setReactions] = useState(initialReactions)
  return (
    <div className="grid gap-3">
      <p className="sb-helper">¿Qué te dejó esta idea?</p>
      <ReactionBar label="Reacciones a la publicación" reactions={reactions} onReact={(id) => {
        setReactions((current) => current.map((reaction) => reaction.id === id
          ? { ...reaction, active: !reaction.active, count: reaction.count + (reaction.active ? -1 : 1) }
          : reaction))
      }} />
    </div>
  )
}

const pollOptions: PollOption[] = [
  { id: 'error', label: 'Error y reintento', votes: 9 },
  { id: 'loading', label: 'Carga y espera', votes: 6 },
  { id: 'success', label: 'Confirmación', votes: 3 },
]

function PollDemo() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const options = pollOptions.map((option) => ({ ...option, votes: option.votes + Number(option.id === selectedId) }))
  return <SocialPoll question="¿Qué estado revisarías primero?" options={options} selectedId={selectedId} onVote={setSelectedId} />
}

const initialComments: SocialComment[] = [
  { id: 'example', author: 'Lectora', initials: 'L', text: 'Que conserve lo que ya escribí. Así puedo reintentar con calma.' },
]

function CommentsDemo() {
  const [draft, setDraft] = useState('')
  const [comments, setComments] = useState(initialComments)
  return (
    <CommentThread
      prompt="¿Qué esperas de un mensaje de error?"
      comments={comments}
      draft={draft}
      onDraftChange={setDraft}
      onPublish={(text) => {
        setComments((current) => [...current, { id: String(current.length), author: 'Tú', initials: 'T', text }])
        setDraft('')
      }}
    />
  )
}

export const social: Specimen[] = [
  ['reaction-bar', 'Reacciones', <ReactionsDemo />],
  ['social-poll', 'Encuesta social', <PollDemo />],
  ['comment-thread', 'Hilo de comentarios', <CommentsDemo />],
  ...postCtas,
]
