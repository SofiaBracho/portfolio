import { useState } from 'react'
import { AlignCenter, AlignLeft, AlignRight, Bold, ChevronDown, Italic, Plus, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import type { Specimen } from '../component-catalog'

const topics = ['Diseño', 'Código', 'Producto']

function DatePicker() {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        {date ? date.toLocaleDateString('es-VE') : 'Elegir fecha'} <ChevronDown />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 8))
  return <Calendar mode="single" defaultMonth={new Date(2026, 10, 1)} selected={date} onSelect={setDate} className="mx-auto" />
}

function FormDemo() {
  const [saved, setSaved] = useState(false)
  return (
    <form className="grid gap-3" onSubmit={(event) => {
      event.preventDefault()
      setSaved(true)
    }}>
      <Field>
        <FieldLabel htmlFor="demo-email">Correo de contacto</FieldLabel>
        <Input id="demo-email" type="email" placeholder="hola@ejemplo.com" required onChange={() => setSaved(false)} />
      </Field>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Guardar</Button>
        <span role="status" className="text-muted-foreground">{saved ? 'Guardado en esta vista.' : ''}</span>
      </div>
    </form>
  )
}

export const actions: Specimen[] = [
  ['button', 'Button', <div className="flex flex-wrap gap-2"><Button>Guardar</Button><Button variant="outline">Cancelar</Button><Button variant="destructive">Eliminar</Button><Button disabled>En espera</Button></div>],
  ['button-group', 'Button Group', <ButtonGroup><Button variant="outline"><Plus /> Nuevo</Button><Button variant="outline">Importar</Button></ButtonGroup>],
  ['badge', 'Badge', <div className="flex flex-wrap gap-2"><Badge className="sb-badge">En revisión</Badge><Badge>Publicado</Badge><Badge variant="destructive">Error</Badge></div>],
  ['toggle', 'Toggle', <Toggle variant="outline" aria-label="Negrita"><Bold /></Toggle>],
  ['toggle-group', 'Toggle Group', <ToggleGroup variant="outline" defaultValue={['left']}><ToggleGroupItem value="left" aria-label="Alinear a la izquierda"><AlignLeft /></ToggleGroupItem><ToggleGroupItem value="center" aria-label="Centrar"><AlignCenter /></ToggleGroupItem><ToggleGroupItem value="right" aria-label="Alinear a la derecha"><AlignRight /></ToggleGroupItem><ToggleGroupItem value="italic" aria-label="Itálica"><Italic /></ToggleGroupItem></ToggleGroup>],
]

export const forms: Specimen[] = [
  ['input', 'Input', <div className="grid gap-2"><Label htmlFor="demo-name">Nombre del proyecto</Label><Input id="demo-name" placeholder="Pixel to Cloud" /></div>],
  ['textarea', 'Textarea', <div className="grid gap-2"><Label htmlFor="demo-notes">Notas de revisión</Label><Textarea id="demo-notes" placeholder="Escribe un detalle para revisar…" /></div>],
  ['label', 'Label', <div className="grid gap-2"><Label htmlFor="demo-label">Nombre visible</Label><Input id="demo-label" defaultValue="Sofía Bracho" /></div>],
  ['field', 'Field', <Field data-invalid><FieldLabel htmlFor="demo-invalid">Título de la lámina</FieldLabel><Input id="demo-invalid" aria-invalid placeholder="Sin título" /><FieldError>Escribe un título antes de continuar.</FieldError><FieldDescription>El título se verá en el catálogo.</FieldDescription></Field>],
  ['form', 'Form', <FormDemo />],
  ['input-group', 'Input Group', <InputGroup><InputGroupAddon><Search /></InputGroupAddon><InputGroupInput aria-label="Buscar proyecto" placeholder="Buscar proyecto…" /></InputGroup>],
  ['input-otp', 'Input OTP', <InputOTP maxLength={6} aria-label="Código de seis dígitos"><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} /></InputOTPGroup><InputOTPSeparator /><InputOTPGroup><InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} /></InputOTPGroup></InputOTP>],
  ['checkbox', 'Checkbox', <div className="flex items-center gap-2"><Checkbox id="demo-checkbox" defaultChecked /><Label htmlFor="demo-checkbox">Incluir portada</Label></div>],
  ['radio-group', 'Radio Group', <RadioGroup defaultValue="diseño" aria-label="Tema editorial">{topics.map((topic) => <div className="flex items-center gap-2" key={topic}><RadioGroupItem id={'demo-radio-' + topic} value={topic.toLowerCase()} /><Label htmlFor={'demo-radio-' + topic}>{topic}</Label></div>)}</RadioGroup>],
  ['switch', 'Switch', <div className="flex items-center gap-2"><Switch id="demo-switch" defaultChecked /><Label htmlFor="demo-switch">Avisos de revisión</Label></div>],
  ['slider', 'Slider', <Slider aria-label="Opacidad" defaultValue={[65]} max={100} />],
  ['native-select', 'Native Select', <NativeSelect aria-label="Área de trabajo" defaultValue="Diseño">{topics.map((topic) => <NativeSelectOption key={topic}>{topic}</NativeSelectOption>)}</NativeSelect>],
  ['select', 'Select', <Select items={topics.map((topic) => ({ label: topic, value: topic }))} defaultValue="Diseño"><SelectTrigger aria-label="Elegir tema" className="w-full"><SelectValue /></SelectTrigger><SelectContent>{topics.map((topic) => <SelectItem key={topic} value={topic}>{topic}</SelectItem>)}</SelectContent></Select>],
  ['combobox', 'Combobox', <Combobox items={topics}><ComboboxInput aria-label="Filtrar temas" placeholder="Filtrar temas…" /><ComboboxContent><ComboboxEmpty>Sin resultados.</ComboboxEmpty><ComboboxList>{(topic) => <ComboboxItem key={topic} value={topic}>{topic}</ComboboxItem>}</ComboboxList></ComboboxContent></Combobox>],
  ['date-picker', 'Date Picker', <DatePicker />],
  ['calendar', 'Calendar', <CalendarDemo />],
]
