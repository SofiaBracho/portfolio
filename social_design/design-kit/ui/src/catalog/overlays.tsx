import { toast as sonner } from 'sonner'
import { ArrowUpRight, Info, MoreHorizontal } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Toaster } from '@/components/ui/sonner'
import { toast } from '@/components/ui/toast'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import type { Specimen } from '../component-catalog'

const previewAction = (title: string) => toast.add({ title, description: 'Acción de ejemplo en el kit.' })

export const overlays: Specimen[] = [
  ['dialog', 'Dialog', <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>Abrir diálogo</DialogTrigger>
    <DialogContent><DialogHeader><DialogTitle>Revisar portada</DialogTitle><DialogDescription>Comprueba el título y el contraste de la lámina.</DialogDescription></DialogHeader><DialogFooter><DialogClose render={<Button />}>Listo</DialogClose></DialogFooter></DialogContent>
  </Dialog>],
  ['alert-dialog', 'Alert Dialog', <AlertDialog>
    <AlertDialogTrigger render={<Button variant="destructive" />}>Descartar borrador</AlertDialogTrigger>
    <AlertDialogContent><AlertDialogHeader><AlertDialogTitle>¿Descartar este borrador?</AlertDialogTitle><AlertDialogDescription>Se perderán los cambios de esta revisión.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Volver</AlertDialogCancel><AlertDialogAction variant="destructive" onClick={() => previewAction('Borrador descartado')}>Descartar</AlertDialogAction></AlertDialogFooter></AlertDialogContent>
  </AlertDialog>],
  ['sheet', 'Sheet', <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>Abrir panel</SheetTrigger>
    <SheetContent><SheetHeader><SheetTitle>Ficha del proyecto</SheetTitle><SheetDescription>Pixel to Cloud · revisión de interfaz.</SheetDescription></SheetHeader><SheetFooter><SheetClose render={<Button />}>Listo</SheetClose></SheetFooter></SheetContent>
  </Sheet>],
  ['drawer', 'Drawer', <Drawer>
    <DrawerTrigger render={<Button variant="outline" />}>Abrir bandeja</DrawerTrigger>
    <DrawerContent><DrawerHeader><DrawerTitle>Detalles de la entrega</DrawerTitle><DrawerDescription>Dos láminas listas para revisión.</DrawerDescription></DrawerHeader><DrawerFooter><DrawerClose render={<Button variant="outline" />}>Cerrar bandeja</DrawerClose></DrawerFooter></DrawerContent>
  </Drawer>],
  ['popover', 'Popover', <Popover>
    <PopoverTrigger render={<Button variant="outline" />}><Info /> Detalles</PopoverTrigger>
    <PopoverContent align="start"><strong>Vista de revisión</strong><p className="text-muted-foreground">Comprueba los estados con teclado y puntero.</p></PopoverContent>
  </Popover>],
  ['tooltip', 'Tooltip', <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Información del kit" />}><Info /></TooltipTrigger>
    <TooltipContent>Vista de componentes de Pixel to Cloud</TooltipContent>
  </Tooltip>],
  ['hover-card', 'Hover Card', <HoverCard>
    <HoverCardTrigger render={<Button variant="link" />}>Sofía Bracho <ArrowUpRight /></HoverCardTrigger>
    <HoverCardContent align="start"><strong>Sofía Bracho</strong><p className="text-muted-foreground">Diseño, código y decisiones de interfaz.</p></HoverCardContent>
  </HoverCard>],
  ['dropdown-menu', 'Dropdown Menu', <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline" />}><MoreHorizontal /> Acciones</DropdownMenuTrigger>
    <DropdownMenuContent align="start"><DropdownMenuLabel>Proyecto</DropdownMenuLabel><DropdownMenuItem onClick={() => previewAction('Proyecto duplicado')}>Duplicar</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem variant="destructive" onClick={() => previewAction('Proyecto archivado')}>Archivar</DropdownMenuItem></DropdownMenuContent>
  </DropdownMenu>],
  ['context-menu', 'Context Menu', <ContextMenu>
    <ContextMenuTrigger className="grid min-h-20 place-items-center rounded-md border border-dashed px-3 text-center text-muted-foreground" tabIndex={0}>Clic derecho o tecla de menú</ContextMenuTrigger>
    <ContextMenuContent><ContextMenuItem onClick={() => previewAction('Lámina duplicada')}>Duplicar lámina</ContextMenuItem><ContextMenuItem onClick={() => previewAction('Lámina archivada')}>Archivar lámina</ContextMenuItem></ContextMenuContent>
  </ContextMenu>],
  ['command', 'Command', <Command className="border">
    <CommandInput placeholder="Buscar acción…" aria-label="Buscar acción" />
    <CommandList><CommandEmpty>Sin acciones.</CommandEmpty><CommandGroup heading="Proyecto"><CommandItem onSelect={() => previewAction('Proyecto abierto')}>Abrir proyecto <CommandShortcut>↵</CommandShortcut></CommandItem><CommandItem onSelect={() => previewAction('Revisión creada')}>Nueva revisión</CommandItem></CommandGroup></CommandList>
  </Command>],
  ['toast', 'Toast', <Button variant="outline" onClick={() => previewAction('Cambios guardados')}>Mostrar aviso</Button>],
  ['sonner', 'Sonner', <><Toaster theme="dark" position="bottom-center" /><Button variant="outline" onClick={() => sonner.success('Lámina exportada', { description: 'Lista para tu próxima revisión.' })}>Mostrar confirmación</Button></>],
]
