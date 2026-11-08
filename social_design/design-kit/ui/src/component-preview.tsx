import { createRoot } from 'react-dom/client'
import ComponentCatalog from './component-catalog'
import './brand.css'

const section = document.getElementById('components')!
const mount = () => {
  observer.disconnect()
  createRoot(document.getElementById('component-preview-root')!).render(<ComponentCatalog />)
}
const observer = new MutationObserver(() => {
  if (!section.hidden) mount()
})
observer.observe(section, { attributes: true, attributeFilter: ['hidden'] })
if (location.hash === '#components') {
  document.querySelector<HTMLButtonElement>('[data-view="components"]')?.click()
}
if (!section.hidden) mount()
