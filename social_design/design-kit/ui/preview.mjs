import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

const here = import.meta.dirname
const start = '<!-- component-preview:start -->'
const end = '<!-- component-preview:end -->'
const tab = '<button type="button" aria-selected="false" data-view="components">Componentes</button>'
const postTab = '<button aria-selected="false" data-view="post1">'

function updateNavigation(html) {
  const kit = html.indexOf('<section class="preview-section" id="kit" hidden>')
  if (kit !== -1) {
    const post = html.indexOf('<section class="preview-section" id="post1" hidden>', kit)
    assert.ok(post > kit, 'Expected the first carousel after the legacy kit')
    html = html.slice(0, kit) + html.slice(post)
  }
  assert.ok(html.includes(postTab), 'Missing first carousel tab')
  return html
    .replace('<button aria-selected="false" data-view="kit">UI Kit</button>', '')
    .replace(tab, '')
    .replace(postTab, tab + postTab)
}

export async function addComponentPreview(html) {
  const result = await build({
    root: here,
    build: {
      write: false,
      cssCodeSplit: false,
      assetsInlineLimit: Number.MAX_SAFE_INTEGER,
      rollupOptions: {
        input: path.join(here, 'src/component-preview.tsx'),
        output: { format: 'iife', inlineDynamicImports: true },
      },
    },
  })
  assert.ok(!Array.isArray(result) && 'output' in result, 'Expected a single preview bundle')
  const scripts = result.output.filter((file) => file.type === 'chunk')
  const styles = result.output.filter((file) => file.type === 'asset' && file.fileName.endsWith('.css'))
  assert.equal(scripts.length, 1, 'Preview must run from a single script')
  assert.equal(styles.length, 1, 'Preview must run from a single stylesheet')
  assert.ok(html.includes('</head>') && html.includes('</nav>') && html.endsWith('</body></html>'), 'Missing preview navigation or closing markup')
  html = html.replaceAll(/<!-- component-preview:start -->[\s\S]*?<!-- component-preview:end -->/g, '')
  html = updateNavigation(html)

  const script = scripts[0].code
    .replace(/<\/script/gi, '<\\/script')
    .replace(/^[ \t]+$/gm, '')
  const css = String(styles[0].source)
  const catalog = '<section id="components" class="preview-section" aria-label="Catálogo de componentes" hidden><div id="component-preview-root"></div></section>'
  return html
    .replace('</head>', () => start + '<style>' + css + '</style>' + end + '</head>')
    .replace('</body></html>', () => start + catalog + '<script>' + script + '</script>' + end + '</body></html>')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const preview = path.join(here, 'preview.html')
  const html = await fs.readFile(preview, 'utf8')
  await fs.writeFile(preview, await addComponentPreview(html.trimEnd()))
  console.log('Preview actualizado · Componentes')
}
