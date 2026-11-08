import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table'
import { AlertCircle, ArrowDownUp, Check, FileText, Layers, Sparkles } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentMedia, AttachmentTitle } from '@/components/ui/attachment'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader, CodeBlockLine, CodeBlockTitle } from '@/components/ui/code-block'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'
import { Message, MessageAvatar, MessageContent, MessageHeader } from '@/components/ui/message'
import { MessageScroller, MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport } from '@/components/ui/message-scroller'
import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from '@/components/ui/progress'
import { Questionnaire, QuestionnaireChoice, QuestionnaireChoices, QuestionnaireInput, QuestionnaireItem, QuestionnaireTitle } from '@/components/ui/questionnaire'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Trace, TraceDescription, TraceIcon, TraceLine, TraceTitle } from '@/components/ui/trace'
import type { Specimen } from '../component-catalog'

const reviews = [
  { title: 'Portada', status: 'Lista', revision: 3 },
  { title: 'Formulario', status: 'En revisión', revision: 2 },
  { title: 'Conversación', status: 'Borrador', revision: 1 },
]
const columns: ColumnDef<(typeof reviews)[number]>[] = [
  { accessorKey: 'title', header: 'Lámina' },
  { accessorKey: 'status', header: 'Estado' },
  {
    accessorKey: 'revision',
    header: ({ column }) => <Button variant="ghost" size="sm" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>Versión <ArrowDownUp /></Button>,
  },
]

function DataTable() {
  const table = useReactTable({ columns, data: reviews, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel() })
  return (
    <Table>
      <TableHeader>{table.getHeaderGroups().map((group) => <TableRow key={group.id}>
        {group.headers.map((header) => {
          const sort = header.column.getIsSorted()
          return <TableHead key={header.id} aria-sort={sort === 'asc' ? 'ascending' : sort === 'desc' ? 'descending' : undefined}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
        })}
      </TableRow>)}</TableHeader>
      <TableBody>{table.getRowModel().rows.map((row) => <TableRow key={row.id}>
        {row.getVisibleCells().map((cell) => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}
      </TableRow>)}</TableBody>
    </Table>
  )
}

const chartData = [{ area: 'Diseño', listos: 4 }, { area: 'Código', listos: 7 }, { area: 'Revisión', listos: 5 }]
const chartConfig = { listos: { label: 'Listos', color: 'var(--chart-1)' } }
const code = ':root {\n  --primary: #FFCE1F;\n  --ring: #22D3EE;\n}'
const topics = ['Diseño', 'Código', 'Ambos']

export const feedback: Specimen[] = [
  ['alert', 'Alert', <Alert variant="destructive" className="border-destructive/65"><AlertCircle /><AlertTitle>No pudimos guardar</AlertTitle><AlertDescription>Tu borrador sigue disponible. Intenta de nuevo.</AlertDescription></Alert>],
  ['progress', 'Progress', <Progress value={64} className="gap-2"><ProgressLabel>Revisión de láminas</ProgressLabel><ProgressValue /><ProgressTrack><ProgressIndicator /></ProgressTrack></Progress>],
  ['skeleton', 'Skeleton', <div className="flex items-center gap-3" aria-label="Cargando perfil"><Skeleton className="size-10 rounded-full" /><div className="grid flex-1 gap-2"><Skeleton className="h-3 w-3/4" /><Skeleton className="h-3 w-1/2" /></div></div>],
  ['spinner', 'Spinner', <div className="flex items-center gap-2"><Spinner className="text-ring" aria-label="Cargando" />Preparando exportación…</div>],
  ['empty', 'Empty', <Empty className="border p-4"><EmptyHeader><EmptyMedia variant="icon"><Layers /></EmptyMedia><EmptyTitle>Sin borradores</EmptyTitle><EmptyDescription>Aquí verás las láminas pendientes.</EmptyDescription></EmptyHeader></Empty>],
  ['marker', 'Marker', <Marker><MarkerIcon><Check /></MarkerIcon><MarkerContent>Contraste verificado</MarkerContent></Marker>],
]

export const data: Specimen[] = [
  ['table', 'Table', <Table><TableHeader><TableRow><TableHead>Lámina</TableHead><TableHead>Estado</TableHead></TableRow></TableHeader><TableBody>{reviews.map((review) => <TableRow key={review.title}><TableCell>{review.title}</TableCell><TableCell>{review.status}</TableCell></TableRow>)}</TableBody></Table>],
  ['data-table', 'Data Table', <DataTable />, true],
  ['chart', 'Chart', <ChartContainer config={chartConfig} className="h-40 w-full aspect-auto"><BarChart data={chartData} accessibilityLayer><CartesianGrid vertical={false} /><XAxis dataKey="area" axisLine={false} tickLine={false} tickMargin={8} /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="listos" fill="var(--color-listos)" radius={4} /></BarChart></ChartContainer>, true],
  ['item', 'Item', <Item variant="outline"><ItemMedia variant="icon"><FileText /></ItemMedia><ItemContent><ItemTitle>Guía de interfaz</ItemTitle><ItemDescription>Actualizada para esta entrega.</ItemDescription></ItemContent></Item>],
  ['kbd', 'Kbd', <div className="flex flex-wrap items-center gap-3"><span>Guardar borrador</span><KbdGroup><Kbd>Ctrl</Kbd><Kbd>S</Kbd></KbdGroup></div>],
]

export const conversation: Specimen[] = [
  ['avatar', 'Avatar', <div className="flex items-center gap-3"><Avatar><AvatarFallback className="border border-ring/45 text-ring">SB</AvatarFallback></Avatar><strong>Sofía Bracho</strong></div>],
  ['attachment', 'Attachment', <Attachment><AttachmentMedia variant="icon"><FileText /></AttachmentMedia><AttachmentContent><AttachmentTitle>Guía de marca.pdf</AttachmentTitle><AttachmentDescription>Documento · PDF</AttachmentDescription></AttachmentContent></Attachment>],
  ['bubble', 'Bubble', <div className="grid gap-2"><Bubble variant="secondary"><BubbleContent>El contraste ya está revisado.</BubbleContent></Bubble><Bubble variant="outline"><BubbleContent>Ahora pruebo el foco.</BubbleContent></Bubble></div>],
  ['message', 'Message', <Message><MessageAvatar><Avatar><AvatarFallback>SB</AvatarFallback></Avatar></MessageAvatar><MessageContent><MessageHeader>Sofía Bracho</MessageHeader><Bubble variant="secondary"><BubbleContent>El mensaje sigue aquí.</BubbleContent></Bubble></MessageContent></Message>],
  ['message-scroller', 'Message Scroller', <div className="h-40 overflow-hidden rounded-lg border"><MessageScrollerProvider defaultScrollPosition="start" autoScroll={false}><MessageScroller><MessageScrollerViewport aria-label="Historial de revisión"><MessageScrollerContent className="space-y-2 p-3">{['Comenzó la revisión.', 'Se confirmó el contraste.', 'Se probó con teclado.', 'Falta una revisión en móvil.', 'La entrega está lista.'].map((text, index) => <MessageScrollerItem key={text} messageId={String(index)}><Bubble variant="secondary"><BubbleContent>{text}</BubbleContent></Bubble></MessageScrollerItem>)}</MessageScrollerContent></MessageScrollerViewport></MessageScroller></MessageScrollerProvider></div>],
  ['questionnaire', 'Questionnaire', <Questionnaire className="sb-questionnaire" items={[{ name: 'topic', choices: topics.map((label) => ({ value: label, label })) }]} onSubmit={(event) => event.preventDefault()}><QuestionnaireItem name="topic"><QuestionnaireTitle>¿Qué revisamos primero?</QuestionnaireTitle><QuestionnaireChoices>{topics.map((topic) => <QuestionnaireChoice key={topic} value={topic}>{topic}</QuestionnaireChoice>)}<QuestionnaireInput aria-label="Otro tema" placeholder="Otro tema…" /></QuestionnaireChoices></QuestionnaireItem></Questionnaire>],
  ['trace', 'Trace', <Trace><TraceLine><TraceIcon><Check /></TraceIcon><TraceTitle>Tokens aplicados</TraceTitle><TraceDescription>Acción, foco y error.</TraceDescription></TraceLine><TraceLine><TraceIcon><Sparkles /></TraceIcon><TraceTitle>Vista lista</TraceTitle><TraceDescription>Controles disponibles para revisar.</TraceDescription></TraceLine></Trace>],
  ['code-block', 'Code Block', <CodeBlock><CodeBlockHeader><CodeBlockTitle>tokens.css</CodeBlockTitle><CodeBlockActions><CodeBlockCopyButton value={code} /></CodeBlockActions></CodeBlockHeader><CodeBlockContent lineNumbers wrap><CodeBlockLine>:root {'{'}</CodeBlockLine><CodeBlockLine>  --primary: <span className="text-primary">#FFCE1F</span>;</CodeBlockLine><CodeBlockLine>  --ring: <span className="text-ring">#22D3EE</span>;</CodeBlockLine><CodeBlockLine>{'}'}</CodeBlockLine></CodeBlockContent></CodeBlock>, true],
]
