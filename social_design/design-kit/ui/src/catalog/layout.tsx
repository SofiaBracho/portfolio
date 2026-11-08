import { useState } from 'react'
import { Layers, LayoutPanelLeft, PanelsTopLeft } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { DirectionProvider } from '@/components/ui/direction'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Specimen } from '../component-catalog'

const phases = ['Diseño', 'Construcción', 'Revisión']

function Pages() {
  const [page, setPage] = useState(1)
  return (
    <div className="grid gap-2 text-center">
      <Pagination aria-label="Páginas de ejemplo"><PaginationContent>
        {[1, 2, 3].map((number) => <PaginationItem key={number}><PaginationLink href={'#demo-page-' + number} isActive={page === number} onClick={(event) => { event.preventDefault(); setPage(number) }}>{number}</PaginationLink></PaginationItem>)}
      </PaginationContent></Pagination>
      <p className="text-muted-foreground" role="status">Página {page} de 3</p>
    </div>
  )
}

function SidebarDemo() {
  const [active, setActive] = useState(phases[0])
  return (
    <SidebarProvider className="overflow-hidden rounded-lg border" style={{ '--sidebar-width': '9rem' } as React.CSSProperties}>
      <Sidebar collapsible="none">
        <SidebarContent><SidebarGroup><SidebarGroupLabel>Proyecto</SidebarGroupLabel><SidebarMenu>
          {phases.map((phase) => <SidebarMenuItem key={phase}><SidebarMenuButton isActive={phase === active} onClick={() => setActive(phase)}>{phase}</SidebarMenuButton></SidebarMenuItem>)}
        </SidebarMenu></SidebarGroup></SidebarContent>
      </Sidebar>
      <div className="grid flex-1 place-content-center p-3 text-center" role="status"><LayoutPanelLeft className="mx-auto mb-2 text-ring" />{active}</div>
    </SidebarProvider>
  )
}

export const navigation: Specimen[] = [
  ['breadcrumb', 'Breadcrumb', <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#component-catalog">Kit</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Componentes</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>],
  ['tabs', 'Tabs', <Tabs defaultValue="Diseño"><TabsList>{phases.map((phase) => <TabsTrigger key={phase} value={phase}>{phase}</TabsTrigger>)}</TabsList>{phases.map((phase) => <TabsContent key={phase} value={phase} className="rounded-lg border p-3">Etapa de {phase.toLowerCase()}.</TabsContent>)}</Tabs>],
  ['pagination', 'Pagination', <Pages />],
  ['menubar', 'Menubar', <Menubar><MenubarMenu><MenubarTrigger>Proyecto</MenubarTrigger><MenubarContent><MenubarItem render={<a href="#component-catalog" />}>Volver al índice</MenubarItem></MenubarContent></MenubarMenu><MenubarMenu><MenubarTrigger>Vista</MenubarTrigger><MenubarContent><MenubarItem render={<a href="#sb-specimens" />}>Ver componentes</MenubarItem></MenubarContent></MenubarMenu></Menubar>],
  ['navigation-menu', 'Navigation Menu', <NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Explorar kit</NavigationMenuTrigger><NavigationMenuContent><NavigationMenuLink href="#component-catalog">Índice de componentes</NavigationMenuLink><NavigationMenuLink href="#sb-specimens">Muestras del tema</NavigationMenuLink></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>],
  ['sidebar', 'Sidebar', <SidebarDemo />, true],
]

export const layout: Specimen[] = [
  ['card', 'Card', <Card><CardHeader><CardTitle>Pixel to Cloud</CardTitle><CardDescription>Diseño y código en una misma pieza.</CardDescription></CardHeader><CardContent><Button variant="outline">Ver ficha</Button></CardContent></Card>],
  ['aspect-ratio', 'Aspect Ratio', <AspectRatio ratio={16 / 9} className="grid place-content-center rounded-lg border border-ring/40 bg-background text-ring"><span className="font-mono">16 : 9</span></AspectRatio>],
  ['separator', 'Separator', <div className="grid gap-3"><strong>Sistema visual</strong><Separator /><p className="text-muted-foreground">Color, tipografía y geometría.</p></div>],
  ['accordion', 'Accordion', <Accordion><AccordionItem value="palette"><AccordionTrigger>¿Cómo se usa el amarillo?</AccordionTrigger><AccordionContent>Para la acción principal y el énfasis editorial.</AccordionContent></AccordionItem><AccordionItem value="focus"><AccordionTrigger>¿Cómo se ve el foco?</AccordionTrigger><AccordionContent>El cian indica el foco de teclado.</AccordionContent></AccordionItem></Accordion>],
  ['collapsible', 'Collapsible', <Collapsible className="grid gap-2"><CollapsibleTrigger render={<Button variant="outline" />}>Mostrar notas <Layers /></CollapsibleTrigger><CollapsibleContent className="rounded-lg border p-3">Revisar contraste y lectura en móvil.</CollapsibleContent></Collapsible>],
  ['scroll-area', 'Scroll Area', <ScrollArea className="h-36 rounded-lg border"><ul className="space-y-2 p-3">{Array.from({ length: 10 }, (_, index) => <li key={index}>Lámina {String(index + 1).padStart(2, '0')}</li>)}</ul></ScrollArea>],
  ['resizable', 'Resizable', <ResizablePanelGroup orientation="horizontal" className="min-h-28 rounded-lg border"><ResizablePanel defaultSize="50%" minSize="25%"><div className="grid h-full place-content-center p-2">Diseño</div></ResizablePanel><ResizableHandle withHandle /><ResizablePanel defaultSize="50%" minSize="25%"><div className="grid h-full place-content-center p-2">Código</div></ResizablePanel></ResizablePanelGroup>],
  ['carousel', 'Carousel', <Carousel className="mx-10" opts={{ loop: true }}><CarouselContent>{phases.map((phase, index) => <CarouselItem key={phase}><div className="grid min-h-24 place-content-center rounded-lg border bg-background text-center"><span className="text-ring">0{index + 1}</span>{phase}</div></CarouselItem>)}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>],
  ['direction', 'Direction', <DirectionProvider direction="rtl"><div dir="rtl" lang="ar" className="flex items-center gap-3 rounded-lg border p-3"><PanelsTopLeft className="text-ring" /> واجهة المستخدم <span dir="ltr" className="ms-auto font-mono text-muted-foreground">RTL</span></div></DirectionProvider>],
  ['typography', 'Typography', <div className="grid gap-2"><p className="sb-library-index">Chakra Petch · Space Grotesk · Space Mono</p><p className="text-3xl font-semibold">Del píxel a la nube.</p><p className="text-muted-foreground">Un detalle visible cambia cómo se usa una interfaz.</p><code className="text-ring">estado: en revisión</code></div>, true],
]
