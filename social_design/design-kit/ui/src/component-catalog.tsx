import { useState, type CSSProperties, type ReactNode } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toast'
import { TooltipProvider } from '@/components/ui/tooltip'
import { actions, forms } from './catalog/controls'
import { data, conversation, feedback } from './catalog/content'
import { layout, navigation } from './catalog/layout'
import { overlays } from './catalog/overlays'
import { social } from './catalog/social'
import './component-catalog.css'

export type Specimen = [id: string, title: string, demo: ReactNode, wide?: boolean]

const groups = [
  { name: 'Acciones', specimens: actions },
  { name: 'Formularios', specimens: forms },
  { name: 'Navegación', specimens: navigation },
  { name: 'Estructura', specimens: layout },
  { name: 'Capas y menús', specimens: overlays },
  { name: 'Estados', specimens: feedback },
  { name: 'Datos', specimens: data },
  { name: 'Conversación y código', specimens: conversation },
  { name: 'Social', specimens: social },
]
const specimens = groups.flatMap(({ name, specimens }) =>
  specimens.map(([id, title, demo, wide]) => ({ id, title, demo, wide, group: name }))
).map((item, index) => ({ ...item, number: String(index + 1).padStart(2, '0') }))

export default function ComponentCatalog() {
  const [group, setGroup] = useState(groups[0].name)
  const [query, setQuery] = useState('')
  const search = query.trim().toLowerCase()
  const visible = specimens.filter((item) => search
    ? `${item.title} ${item.id} ${item.group}`.toLowerCase().includes(search)
    : !group || item.group === group)

  return (
    <TooltipProvider>
      <Toaster>
        <main id="component-catalog" className="sb-library">
          <header className="sb-library-hero">
            <div className="sb-library-kicker">Sofía Bracho / Catálogo en revisión</div>
            <h1>Pixel to <span>Cloud</span></h1>
            <p>{specimens.length} muestras interactivas de shadcn/ui y Pixel to Cloud. Explora el catálogo y prueba los estados con el puntero o el teclado.</p>
            <div className="sb-library-palette" aria-hidden="true">
              {['--primary', '--ring', '--destructive', '--muted-foreground'].map((color) => <span key={color} style={{ '--swatch': `var(${color})` } as CSSProperties} />)}
            </div>
          </header>
          <div className="sb-library-tools">
            <div className="sb-library-search"><Search size={17} aria-hidden="true" /><Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Buscar componente" placeholder="Buscar componente…" /></div>
            <div className="sb-library-filters" role="group" aria-label="Familias de componentes">
              {[...groups.map(({ name }) => name), ''].map((name) => (
                <Button key={name} size="sm" variant="outline" aria-pressed={!search && name === group} onClick={() => { setGroup(name); setQuery('') }}>
                  {name || 'Todos'}
                </Button>
              ))}
            </div>
            <p className="sb-library-meta" role="status">{visible.length} de {specimens.length} · {search ? 'Búsqueda' : group || 'Todas las familias'}</p>
          </div>
          <div className="sb-library-grid" id="sb-specimens">
            {visible.map(({ id, title, demo, wide, number }) => (
              <article key={id} data-specimen={id} className={wide ? 'sb-library-card is-wide' : 'sb-library-card'}>
                <header><span className="sb-library-index">{number}</span><h2>{title}</h2></header>
                <div className="sb-library-stage">{demo}</div>
              </article>
            ))}
          </div>
          {visible.length === 0 && <p className="text-muted-foreground">Sin coincidencias. Prueba otro nombre o elige una familia.</p>}
        </main>
      </Toaster>
    </TooltipProvider>
  )
}
