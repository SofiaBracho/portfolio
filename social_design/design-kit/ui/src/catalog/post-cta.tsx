import { useState } from 'react'
import { Bookmark, Check, MessageSquare } from 'lucide-react'
import { PostCTA } from '@/components/social/post-cta'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { Specimen } from '../component-catalog'

const cases = ['Carrito que se vacía', 'Formulario que borra todo']

function NextPost() {
  const [vote, setVote] = useState<string | null>(null)
  return (
    <PostCTA
      kicker="Tú decides"
      title="¿Qué bug desarmamos después?"
      description="Elige el caso que te haría cerrar la pestaña."
    >
      <div role="group" aria-label="Vota por el próximo caso" className="grid gap-2">
        {cases.map((item) => (
          <Button key={item} type="button" variant="outline" className="sb-social-option" aria-pressed={vote === item} onClick={() => setVote(item)}>
            <span>{item}</span>
            {vote === item && <Check aria-hidden="true" />}
          </Button>
        ))}
      </div>
      <p className="sb-helper" role="status">{vote ? `Votaste por «${vote}».` : 'Vota por el próximo post.'}</p>
    </PostCTA>
  )
}

function RewritePrompt() {
  const [draft, setDraft] = useState('')
  const [reply, setReply] = useState('')
  const text = draft.trim()
  return (
    <PostCTA
      kicker="Tu versión"
      title="Cambia una sola frase."
      description="El formulario dice «Error inesperado». ¿Qué escribirías para que la persona sepa cómo seguir?"
    >
      <form className="grid gap-2" onSubmit={(event) => {
        event.preventDefault()
        if (!text) return
        setReply(text)
        setDraft('')
      }}>
        <Label htmlFor="cta-rewrite">Tu mensaje de error</Label>
        <Textarea id="cta-rewrite" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Escribe tu versión…" />
        <Button type="submit" className="sb-social-publish" disabled={!text}><MessageSquare /> Comentar mi versión</Button>
      </form>
      <p className="sb-helper wrap-anywhere" role="status">{reply ? `Propusiste «${reply}»` : 'Una frase basta.'}</p>
    </PostCTA>
  )
}

function SaveChecklist() {
  const [saved, setSaved] = useState(false)
  return (
    <PostCTA
      kicker="Reto de 30 segundos"
      title="Haz fallar tu formulario."
      description="Antes de publicar, comprueba si el borrador sobrevive al error."
    >
      <ol className="grid list-decimal gap-1 pl-5">
        <li>Escribe un mensaje.</li>
        <li>Provoca un error de envío.</li>
        <li>Comprueba que el texto sigue ahí.</li>
      </ol>
      <Button type="button" className="sb-social-publish" aria-pressed={saved} onClick={() => setSaved((current) => !current)}>
        <Bookmark fill={saved ? 'currentColor' : 'none'} aria-hidden="true" /> Guardar la prueba
      </Button>
      <p className="sb-helper" role="status">{saved ? 'Prueba guardada en esta vista.' : 'Para tu próxima revisión.'}</p>
    </PostCTA>
  )
}

export const postCtas: Specimen[] = [
  ['post-cta', 'CTA · Vota por el próximo post', <NextPost />],
  ['post-cta-comment', 'CTA · Reescribe el mensaje', <RewritePrompt />],
  ['post-cta-save', 'CTA · Guarda el reto', <SaveChecklist />],
]
