// DSH theme: Spider-Verse (dsh-theme-spiderverse)
// Derived palette from the Spider-Verse wallpaper: pink/violet sky, orange
// sunset glow, comic halftone dots and floating dust particles.
window.__ModuleLoader__.load({ id: 'dsh-theme-spiderverse', factory: (require) => {
var module = { exports: {} };
var exports = module.exports;

const SPIDERVERSE_THEME_CSS = `
html[data-dsh-spiderverse-theme] {
  color-scheme: dark !important;
  background: #17102e;
}

html[data-dsh-spiderverse-theme] body {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  color: var(--dsw-alias-label-primary);
  background: #17102e !important;
}

html[data-dsh-spiderverse-theme] #root {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  background: transparent !important;
}

/* Left strip background: the exact SKY palette sampled from the right-side
   wallpaper, so the strip reads as a seamless continuation of that sky.
   Stars and meteors float above it. */
html[data-dsh-spiderverse-theme] body::before {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--dsh-spiderverse-wallpaper-left, 268px);
  z-index: -2;
  pointer-events: none;
  background-image:
    radial-gradient(120% 60% at 20% 8%, rgba(160, 140, 205, 0.55), transparent 70%),
    linear-gradient(180deg,
      #695985 0%,
      #655b91 10%,
      #8d80bd 20%,
      #9186cb 30%,
      #7a81c9 42%,
      #866eac 55%,
      #5b4a7e 78%,
      #3a2c56 100%);
}

/* Deep purple base under the whole app (fallback while the image loads). */
html[data-dsh-spiderverse-theme] body {
  background-color: #241a38 !important;
}

/* Wallpaper photo layer: occupies the area right of the sidebar, the whole
   picture centered and covering that region. The left edge follows the
   sidebar width via --dsh-spiderverse-wallpaper-left (synced from JS). */
html[data-dsh-spiderverse-theme] .dsh-spiderverse-wallpaper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: var(--dsh-spiderverse-wallpaper-left, 268px);
  z-index: -1;
  background-image: var(--dsh-spiderverse-wallpaper-url);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  -webkit-app-region: initial !important;
}

/* Soft blend at the seam so the blurred left strip melts into the sharp
   wallpaper instead of ending at a hard vertical edge. */
html[data-dsh-spiderverse-theme] .dsh-spiderverse-wallpaper::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 72px;
  background: linear-gradient(90deg, rgba(36, 26, 56, 0.55), transparent);
  pointer-events: none;
}

/* Star + meteor canvas sits above the wallpaper but below the UI (#root is
   z-index 10). Stars are only drawn in the left strip; meteors sweep the
   entire viewport, so they glide over the wallpaper and the whole theme. */
html[data-dsh-spiderverse-theme] .dsh-spiderverse-stars {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  pointer-events: none;
  -webkit-app-region: initial !important;
}

/* Comic halftone dots over the wallpaper area only. */
html[data-dsh-spiderverse-theme] body::after {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: var(--dsh-spiderverse-wallpaper-left, 268px);
  z-index: -1;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(255, 190, 220, 0.16) 1.2px, transparent 1.6px),
    radial-gradient(circle, rgba(255, 130, 96, 0.12) 2.2px, transparent 2.8px);
  background-size: 18px 18px, 46px 46px;
  background-position: 0 0, 9px 13px;
  mix-blend-mode: screen;
  opacity: 0.45;
}

/* Readability veil between the wallpaper and the UI. Keep it off the sidebar
   strip so the star field stays crisp; the sidebar has its own glass tint. */
html[data-dsh-spiderverse-theme] .dsh-spiderverse-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: var(--dsh-spiderverse-wallpaper-left, 268px);
  z-index: -1;
  pointer-events: none;
  -webkit-app-region: initial !important;
  background:
    radial-gradient(1200px 800px at 50% 46%, rgba(20, 12, 42, 0.30), rgba(20, 12, 42, 0.16) 60%, rgba(20, 12, 42, 0.38) 100%),
    linear-gradient(180deg, rgba(20, 12, 42, 0.34) 0%, rgba(20, 12, 42, 0.10) 30%, rgba(20, 12, 42, 0.10) 65%, rgba(20, 12, 42, 0.40) 100%);
}

html[data-dsh-spiderverse-theme] .dsh-spiderverse-dust {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  pointer-events: none;
  opacity: 0.9;
  -webkit-app-region: initial !important;
}

html[data-dsh-spiderverse-theme] .dsh-spiderverse-dust[data-disabled] {
  display: none;
}

/* ---------------------------------------------------------------
   Container transparency — the app paints opaque containers over
   the body background, so the wallpaper needs every structural
   surface cleared. Selector families mirror the harness DOM:
   frame/centerCol/main shells, sidebar columns and their _root
   panels, welcome screens, and the conversation scroll container.
   --------------------------------------------------------------- */
html[data-dsh-spiderverse-theme] [class*='frame'],
html[data-dsh-spiderverse-theme] [class*='centerCol'],
html[data-dsh-spiderverse-theme] main {
  background-color: transparent !important;
}

html[data-dsh-spiderverse-theme] [class*='centerCol'] [class$='_root'],
html[data-dsh-spiderverse-theme] main [class$='_root'] {
  background-color: transparent !important;
  background-image: none !important;
}

html[data-dsh-spiderverse-theme] [class*='sidebarCol'] [class*='_root '],
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] [class$='_root'] {
  background-color: transparent !important;
  background-image: none !important;
}

html[data-dsh-spiderverse-theme] [class*='home'],
html[data-dsh-spiderverse-theme] [class*='Home'],
html[data-dsh-spiderverse-theme] [class*='welcome'],
html[data-dsh-spiderverse-theme] [class*='Welcome'] {
  background-color: transparent !important;
  background-image: none !important;
}

/* The conversation scroll container owns its own background; clear it
   and lift content above any in-flow decorative layers. */
html[data-dsh-spiderverse-theme] [data-conversation-scroll] {
  position: relative;
  z-index: 1;
  background: transparent !important;
}

/* Sidebar column: fully transparent — the animated star field shows through
   with no tint at all. Only a hairline keeps the split from the wallpaper. */
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] {
  background: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
  border-color: rgba(255, 178, 216, 0.1) !important;
}

/* Clear the solid fills on sidebar descendants (session rows, brand button,
   hover surfaces) so stars are never covered by little opaque rectangles. */
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] * {
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}

/* Restore a soft glass on hover / active rows so they stay legible while
   still letting the stars glow faintly behind them. */
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] [class*='_item']:hover,
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] [class*='_row']:hover,
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] [class*='_item'][aria-current],
html[data-dsh-spiderverse-theme] [class*='sidebarCol'] [class*='_active'] {
  background-color: rgba(255, 178, 216, 0.1) !important;
  background-image: none !important;
}

/* Composer card: glass panel over the wallpaper. */
html[data-dsh-spiderverse-theme] [data-composer-seat] [class*='_card'],
html[data-dsh-spiderverse-theme] [data-composer-seat] [class*='Card'] {
  background: linear-gradient(145deg, rgba(42, 28, 82, 0.82), rgba(23, 16, 46, 0.86)) !important;
  border-color: rgba(255, 178, 216, 0.18) !important;
  box-shadow: 0 18px 48px rgba(9, 5, 24, 0.3), inset 0 1px rgba(255, 178, 216, 0.08) !important;
}

html[data-dsh-spiderverse-theme] [class*='composer']::before,
html[data-dsh-spiderverse-theme] [class*='composer']::after {
  opacity: 0.16 !important;
}

/* Settings card injected into Settings > General. */
.dsh-spiderverse-settings {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px 18px;
  padding: 16px 0;
  border-top: 0.5px solid var(--dsw-alias-border-l2, rgba(255, 178, 216, 0.16));
  max-width: 640px;
}

.dsh-spiderverse-settings .dsh-spiderverse-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dsh-spiderverse-settings strong {
  font-weight: 600;
}

.dsh-spiderverse-settings span {
  color: var(--dsw-alias-label-tertiary, #b9a8d8);
  font-size: 12px;
}

.dsh-spiderverse-settings label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  justify-self: end;
}

.dsh-spiderverse-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.dsh-spiderverse-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, #ffd2e4 0 18%, transparent 40%),
    linear-gradient(135deg, #ff7ab0 0%, #b07ce8 52%, #ff5444 100%);
  box-shadow: 0 0 8px rgba(255, 122, 176, 0.55);
}
`;

// ----------------------------------------------------------- dust particles

const DUST_PROFILE = Object.freeze({
  frameInterval: 1000 / 30,
  maxPixelRatio: 2,
  resizeDelay: 150,
  baseCount: 90,
  mousePushRadius: 130,
  mousePushStrength: 26,
  sizeMin: 0.8,
  sizeMax: 2.6,
  colors: Object.freeze([
    'rgba(255, 208, 226, {a})',
    'rgba(255, 154, 186, {a})',
    'rgba(232, 180, 255, {a})',
    'rgba(255, 178, 128, {a})',
    'rgba(255, 244, 214, {a})',
  ]),
  twinkleSpeed: 0.9,
})

function makeDustCanvas() {
  const canvas = document.createElement('canvas')
  canvas.className = 'dsh-spiderverse-dust'
  canvas.setAttribute('aria-hidden', 'true')
  document.body.appendChild(canvas)
  return canvas
}

function createDustField(reducedMotion, profile = DUST_PROFILE) {
  const canvas = makeDustCanvas()
  const context = canvas.getContext('2d')
  if (context === null) {
    canvas.remove()
    return { setSettings() {}, destroy() {} }
  }

  let width = 0
  let height = 0
  let pixelRatio = 1
  let particles = []
  let enabled = true
  let density = 0.7
  let drift = 0.5
  let pageVisible = document.visibilityState === 'visible'
  let frame = 0
  let resizeTimer = 0
  let lastFrameTime = 0
  const mouse = { x: -9999, y: -9999, active: false }

  const colorAt = (index, alpha) => profile.colors[index % profile.colors.length].replace('{a}', alpha)

  const spawn = (randomY) => ({
    x: Math.random() * width,
    y: randomY ? Math.random() * height : height + 10,
    size: profile.sizeMin + Math.random() * (profile.sizeMax - profile.sizeMin),
    colorIndex: Math.floor(Math.random() * profile.colors.length),
    baseAlpha: 0.25 + Math.random() * 0.5,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleRate: (0.6 + Math.random() * 0.8) * profile.twinkleSpeed,
    vx: (Math.random() - 0.5) * 6,
    vy: -(4 + Math.random() * 14),
    pushX: 0,
    pushY: 0,
  })

  const targetCount = () => Math.round(profile.baseCount * density)

  const resize = () => {
    const nextWidth = Math.max(1, window.innerWidth)
    const nextHeight = Math.max(1, window.innerHeight)
    const nextRatio = Math.min(window.devicePixelRatio || 1, profile.maxPixelRatio)
    width = nextWidth
    height = nextHeight
    pixelRatio = nextRatio
    canvas.width = Math.round(width * pixelRatio)
    canvas.height = Math.round(height * pixelRatio)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    if (particles.length === 0) particles = Array.from({ length: targetCount() }, () => spawn(true))
  }

  const draw = (time) => {
    context.clearRect(0, 0, width, height)
    if (!enabled) return
    for (const p of particles) {
      const twinkle = 0.55 + 0.45 * Math.sin(time * 0.001 * p.twinkleRate + p.twinklePhase)
      context.beginPath()
      context.fillStyle = colorAt(p.colorIndex, (p.baseAlpha * twinkle).toFixed(3))
      context.arc(p.x + p.pushX, p.y + p.pushY, p.size, 0, Math.PI * 2)
      context.fill()
    }
  }

  const advance = (deltaSeconds) => {
    const delta = Math.min(0.05, deltaSeconds)
    const speedScale = drift
    while (particles.length < targetCount()) particles.push(spawn(false))
    if (particles.length > targetCount()) particles.length = targetCount()
    for (const p of particles) {
      p.x += p.vx * speedScale * delta
      p.y += p.vy * speedScale * delta
      // Gentle mouse repulsion, eased back to zero.
      if (mouse.active) {
        const dx = (p.x + p.pushX) - mouse.x
        const dy = (p.y + p.pushY) - mouse.y
        const distance = Math.hypot(dx, dy)
        if (distance < profile.mousePushRadius && distance > 0.001) {
          const force = (1 - distance / profile.mousePushRadius) * profile.mousePushStrength
          p.pushX += (dx / distance) * force * delta * 6
          p.pushY += (dy / distance) * force * delta * 6
        }
      }
      p.pushX *= 0.92
      p.pushY *= 0.92
      if (p.y + p.pushY < -12) {
        Object.assign(p, spawn(false))
      } else if (p.x + p.pushX < -20) {
        p.x = width + 16
      } else if (p.x + p.pushX > width + 20) {
        p.x = -16
      }
    }
  }

  const canAnimate = () => enabled && pageVisible && !reducedMotion

  const schedule = () => {
    if (canAnimate() && frame === 0) frame = window.requestAnimationFrame(render)
  }

  function render(time) {
    frame = 0
    if (!canAnimate()) return
    if (time - lastFrameTime < profile.frameInterval) {
      schedule()
      return
    }
    const deltaSeconds = lastFrameTime === 0
      ? profile.frameInterval / 1000
      : (time - lastFrameTime) / 1000
    lastFrameTime = time - ((time - lastFrameTime) % profile.frameInterval)
    advance(deltaSeconds)
    draw(time)
    schedule()
  }

  const onPointerMove = (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    mouse.active = true
    schedule()
  }
  const onPointerLeave = () => {
    mouse.active = false
  }
  const onResize = () => {
    window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => {
      resizeTimer = 0
      resize()
      schedule()
    }, profile.resizeDelay)
  }
  const onVisibilityChange = () => {
    pageVisible = document.visibilityState === 'visible'
    if (pageVisible) schedule()
  }

  resize()
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerLeave, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange, { passive: true })
  schedule()

  return {
    setSettings(next) {
      enabled = next.enabled !== false && next.particles !== false
      density = Math.min(1, Math.max(0.2, Number(next.density) || 0.7))
      drift = Math.min(1, Math.max(0.1, Number(next.drift) || 0.5))
      canvas.toggleAttribute('data-disabled', !enabled)
      lastFrameTime = 0
      if (enabled) schedule()
      else {
        window.cancelAnimationFrame(frame)
        frame = 0
        context.clearRect(0, 0, width, height)
      }
    },
    destroy() {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.clearTimeout(resizeTimer)
      window.cancelAnimationFrame(frame)
      canvas.remove()
    },
  }
}

// ------------------------------------------------------------ settings form

const DEFAULT_SETTINGS = Object.freeze({
  enabled: true,
  particles: true,
  density: 0.7,
  drift: 0.5,
})

function normalizeSettings(value) {
  const density = Number(value?.density)
  const drift = Number(value?.drift)
  return Object.freeze({
    enabled: value?.enabled !== false,
    particles: value?.particles !== false,
    density: Number.isFinite(density) ? Math.min(1, Math.max(0.2, density)) : DEFAULT_SETTINGS.density,
    drift: Number.isFinite(drift) ? Math.min(1, Math.max(0.1, drift)) : DEFAULT_SETTINGS.drift,
  })
}

// Optional service children must not block the theme's root fiber at startup.
function createHostSettingsForm(ctx, entryId) {
  const listeners = new Set()
  const forms = new Map()
  const unavailable = Object.freeze({ status: 'unavailable', mode: 'host', writable: false })
  const current = () => forms.get('configForms') ?? forms.get('settingsScope')
  const notify = () => { for (const listener of listeners) listener() }
  const disposers = ['configForms', 'settingsScope'].map(service => ctx.inject([service], child => {
    child.effect(() => {
      const form = service === 'configForms'
        ? child.configForms.get(entryId)
        : child.settingsScope.bind({ namespace: entryId })
      forms.set(service, form)
      const off = form.subscribe(notify)
      notify()
      return () => {
        off()
        forms.delete(service)
        notify()
      }
    })
  }))
  return {
    getSnapshot: () => current()?.getSnapshot() ?? unavailable,
    subscribe: listener => { listeners.add(listener); return () => listeners.delete(listener) },
    mutate: ops => current()?.mutate(ops) ?? Promise.resolve(false),
    destroy: () => { listeners.clear(); return Promise.all(disposers.map(fiber => fiber.dispose())) },
  }
}

// The host owns persistence, revision checks and reconnect synchronization.
function createSettingsController(form) {
  const listeners = new Set()
  let saving = false
  let generation = 0
  let preview
  let error = ''
  let disposed = false
  let snapshot
  const sync = () => {
    if (disposed) return
    const host = form.getSnapshot()
    const ready = host.status === 'ready' && host.value !== undefined
    const hostBacked = host.mode === undefined || host.mode === 'host'
    snapshot = Object.freeze({
      value: preview ?? normalizeSettings(ready ? host.value : DEFAULT_SETTINGS),
      ready,
      loading: host.status === 'loading',
      editable: ready && hostBacked && host.writable,
      saving,
      error,
    })
    for (const listener of listeners) listener()
  }
  const unsubscribe = form.subscribe(sync)
  sync()

  return {
    get: () => snapshot,
    subscribe: listener => {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    set: async update => {
      if (disposed || !snapshot.editable) return false
      const fields = Object.keys(DEFAULT_SETTINGS).filter(field => Object.hasOwn(update, field))
      if (fields.length === 0) return false
      preview = normalizeSettings({ ...snapshot.value, ...update })
      const ops = fields.map(field => ({ op: 'set', path: [field], value: preview[field] }))
      const current = ++generation
      saving = true
      error = ''
      sync()
      try {
        const accepted = await form.mutate(ops)
        if (accepted === false && current === generation) error = '设置保存失败，请重试。'
        return accepted !== false
      } catch {
        if (current === generation) error = '设置保存失败，请检查连接后重试。'
        return false
      } finally {
        if (current === generation) {
          preview = undefined
          saving = false
          sync()
        }
      }
    },
    destroy: () => {
      disposed = true
      unsubscribe()
      listeners.clear()
    },
  }
}

const PLUGIN_ID = 'dsh-theme-spiderverse'
const STYLE_SELECTOR = 'style[data-plugin-css="dsh-theme-spiderverse/theme.css"]'
const DARK_PALETTE_ATTRIBUTE = 'data-ds-dark-theme'

const inject = ['slots']

const SPIDERVERSE_TOKENS = Object.freeze({
  '--dsw-alias-bg-base': '#17102e',
  '--dsw-alias-bg-layer-1': '#221743',
  '--dsw-alias-bg-layer-2': '#2c1e56',
  '--dsw-alias-bg-layer-3': '#372567',
  '--dsw-alias-bg-module-platform': '#372567',
  '--dsw-alias-bg-overlay': '#291d50',
  '--dsw-alias-bg-mask-1': 'rgba(9, 5, 24, 0.74)',
  '--dsw-alias-bg-mask-2': 'rgba(14, 8, 32, 0.54)',
  '--dsw-alias-border-l1': 'rgba(255, 190, 220, 0.14)',
  '--dsw-alias-border-l2': 'rgba(255, 196, 224, 0.2)',
  '--dsw-alias-border-l3': 'rgba(255, 206, 230, 0.3)',
  '--dsw-alias-brand-primary': '#fdf3f9',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#ffd0e4',
  '--dsw-alias-brand-text': '#fff5fa',
  '--dsw-alias-label-primary': '#fbeef7',
  '--dsw-alias-label-primary-inverted': '#2c1e56',
  '--dsw-alias-label-secondary': '#dcc7ea',
  '--dsw-alias-label-tertiary': '#b9a3d6',
  '--dsw-alias-label-caption': '#c3aede',
  '--dsw-alias-markdown-code-block-banner': '#221743',
  '--dsw-alias-state-business-primary': '#e88ab8',
  '--dsw-alias-state-business-tertiary': 'rgba(232, 138, 184, 0.22)',
  '--dsw-alias-button-primary-fill': '#e05f96',
  '--dsw-alias-button-primary-hover': '#ef77ab',
  '--dsw-alias-button-elevated-fill': '#372567',
  '--dsw-alias-button-floating-fill': '#2c1e56',
  '--dsw-alias-button-floating-hover': '#3f2b76',
  '--dsw-alias-interactive-bg-hover': 'rgba(255, 190, 220, 0.12)',
  '--dsw-alias-interactive-bg-active': 'rgba(255, 200, 226, 0.18)',
  '--dsw-alias-interactive-bg-hover-solid': '#3d2a72',
  '--dsw-alias-scrollbar-bg-l1': '#3a2a6b',
  '--dsw-alias-scrollbar-bg-l2': '#4c3a85',
  '--dsw-alias-scrollbar-hover-l1': '#6a54a5',
  '--dsw-alias-scrollbar-hover-l2': '#8468bd',
  '--dsw-alias-tooltip-bg': '#2c1e56',
  '--dsw-alias-toast-bg': '#2c1e56',
  '--dsw-specific-bubble': 'rgba(38, 25, 74, 0.88)',
  '--dsw-specific-bubble-highlight': 'rgba(64, 44, 118, 0.92)',
  '--dsw-specific-sidebar-fill': '#1c1338',
})

function isBrowser() {
  return typeof document !== 'undefined' && typeof window !== 'undefined'
}

function installStyle() {
  const existing = document.querySelector(STYLE_SELECTOR)
  if (existing !== null) return existing

  const style = document.createElement('style')
  style.dataset.plugin = PLUGIN_ID
  style.dataset.pluginCss = `${PLUGIN_ID}/theme.css`
  style.textContent = SPIDERVERSE_THEME_CSS
  document.head.appendChild(style)
  return style
}

function installBackgroundLayer() {
  const wallpaper = document.createElement('div')
  wallpaper.className = 'dsh-spiderverse-wallpaper'
  wallpaper.setAttribute('aria-hidden', 'true')
  const veil = document.createElement('div')
  veil.className = 'dsh-spiderverse-bg'
  veil.setAttribute('aria-hidden', 'true')
  document.body.appendChild(wallpaper)
  document.body.appendChild(veil)
  return () => {
    wallpaper.remove()
    veil.remove()
  }
}

// ---------------------------------------------------------------- star field

const STAR_PROFILE = Object.freeze({
  frameInterval: 1000 / 30,
  maxPixelRatio: 2,
  resizeDelay: 150,
  densityPerPx: 1 / 2200,
  twinkleSpeed: 1.9,
  shootingStarMinSeconds: 1.6,
  shootingStarMaxSeconds: 4.5,
  palette: Object.freeze([
    'rgba(255, 226, 214, {a})',
    'rgba(246, 208, 232, {a})',
    'rgba(255, 236, 196, {a})',
    'rgba(228, 214, 246, {a})',
  ]),
})

/** Animated star field with occasional shooting stars. */
function createStarField(reducedMotion, profile = STAR_PROFILE) {
  const canvas = document.createElement('canvas')
  canvas.className = 'dsh-spiderverse-stars'
  canvas.setAttribute('aria-hidden', 'true')
  document.body.appendChild(canvas)
  const context = canvas.getContext('2d')
  if (context === null) {
    canvas.remove()
    return { destroy() {} }
  }

  let width = 0
  let height = 0
  let pixelRatio = 1
  let stars = []
  let frame = 0
  let lastFrameTime = 0
  let resizeTimer = 0
  let nextShootingAt = performance.now() + 900
  let shooting = null
  let pageVisible = document.visibilityState === 'visible'

  const stripWidth = () => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--dsh-spiderverse-wallpaper-left')
    const value = Number.parseInt(raw, 10)
    return Number.isFinite(value) && value > 0 ? Math.min(value, width) : Math.min(268, width)
  }

  const spawnStars = () => {
    const limit = stripWidth()
    const count = Math.round(limit * height * profile.densityPerPx)
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * limit,
      y: Math.random() * height,
      size: 0.5 + Math.random() * 1.5,
      colorIndex: Math.floor(Math.random() * profile.palette.length),
      baseAlpha: 0.4 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      rate: (0.6 + Math.random() * 1.1) * profile.twinkleSpeed,
    }))
  }

  const spawnShootingStar = () => {
    // Meteors sweep the WHOLE theme (both the left sky and the right
    // wallpaper), starting from random points across the full viewport.
    const fromLeft = Math.random() < 0.55
    shooting = {
      x: fromLeft ? -30 : Math.random() * width * 0.85,
      y: Math.random() * height * 0.55,
      vx: (fromLeft ? 1 : 0.8) * (7 + Math.random() * 5),
      vy: 2.6 + Math.random() * 2.2,
      life: 1,
      len: 14 + Math.random() * 12,
    }
  }

  const resize = () => {
    const nextWidth = Math.max(1, window.innerWidth)
    const nextHeight = Math.max(1, window.innerHeight)
    const nextRatio = Math.min(window.devicePixelRatio || 1, profile.maxPixelRatio)
    width = nextWidth
    height = nextHeight
    pixelRatio = nextRatio
    canvas.width = Math.round(width * pixelRatio)
    canvas.height = Math.round(height * pixelRatio)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    spawnStars()
  }

  const draw = (time) => {
    context.clearRect(0, 0, width, height)
    const limit = stripWidth()
    for (const s of stars) {
      const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * s.rate + s.phase)
      const alpha = s.baseAlpha * (0.2 + 0.8 * twinkle)
      context.beginPath()
      context.fillStyle = profile.palette[s.colorIndex].replace('{a}', alpha.toFixed(3))
      context.arc(s.x, s.y, s.size, 0, Math.PI * 2)
      context.fill()
      // Bright stars get a soft glow halo that pulses with the twinkle.
      if (s.size > 1.3 && twinkle > 0.6) {
        context.beginPath()
        context.fillStyle = profile.palette[s.colorIndex].replace('{a}', (alpha * 0.18).toFixed(3))
        context.arc(s.x, s.y, s.size * 3.2, 0, Math.PI * 2)
        context.fill()
      }
    }
    if (shooting) {
      const { x, y, vx, vy, len } = shooting
      const tx = x - vx * len
      const ty = y - vy * len
      const gradient = context.createLinearGradient(tx, ty, x, y)
      gradient.addColorStop(0, 'rgba(255, 190, 150, 0)')
      gradient.addColorStop(0.7, `rgba(255, 198, 176, ${(0.4 * shooting.life).toFixed(3)})`)
      gradient.addColorStop(1, `rgba(255, 244, 220, ${shooting.life.toFixed(3)})`)
      context.strokeStyle = gradient
      context.lineWidth = 2
      context.lineCap = 'round'
      context.beginPath()
      context.moveTo(tx, ty)
      context.lineTo(x, y)
      context.stroke()
      // Bright head.
      context.beginPath()
      context.fillStyle = `rgba(255, 246, 226, ${shooting.life.toFixed(3)})`
      context.arc(x, y, 2, 0, Math.PI * 2)
      context.fill()
      shooting.x += vx
      shooting.y += vy
      shooting.life -= 0.004
      if (shooting.life <= 0 || shooting.x > width + 80 || shooting.y > height + 80) shooting = null
    } else if (!reducedMotion && time >= nextShootingAt) {
      spawnShootingStar()
      nextShootingAt = time
        + (profile.shootingStarMinSeconds
          + Math.random() * (profile.shootingStarMaxSeconds - profile.shootingStarMinSeconds)) * 1000
    }
  }

  const canAnimate = () => !reducedMotion && pageVisible
  const schedule = () => {
    if (canAnimate() && frame === 0) frame = window.requestAnimationFrame(render)
  }

  function render(time) {
    frame = 0
    if (!canAnimate()) return
    if (time - lastFrameTime < profile.frameInterval) {
      schedule()
      return
    }
    lastFrameTime = time - ((time - lastFrameTime) % profile.frameInterval)
    draw(time)
    schedule()
  }

  const onResize = () => {
    window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => {
      resizeTimer = 0
      resize()
      schedule()
    }, profile.resizeDelay)
  }
  const onVisibilityChange = () => {
    pageVisible = document.visibilityState === 'visible'
    if (pageVisible) schedule()
  }

  resize()
  window.addEventListener('resize', onResize, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange, { passive: true })
  schedule()

  return {
    destroy() {
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.clearTimeout(resizeTimer)
      window.cancelAnimationFrame(frame)
      canvas.remove()
    },
  }
}

// -------------------------------------------------- sidebar width following

/**
 * Keep the wallpaper's left edge glued to the sidebar's actual right edge.
 * The sidebar width is animated by the host, so the CSS variable is updated
 * on every layout change instead of assuming a fixed width.
 */
function installWallpaperOffsetSync() {
  const root = document.documentElement
  let frame = 0
  let lastLeft = -1

  const measure = () => {
    frame = 0
    const column = document.querySelector("[class*='sidebarCol']")
    let left = 268
    if (column instanceof HTMLElement) {
      const rect = column.getBoundingClientRect()
      if (rect.width > 0) left = Math.round(rect.right)
    }
    if (left !== lastLeft) {
      lastLeft = left
      root.style.setProperty('--dsh-spiderverse-wallpaper-left', `${left}px`)
    }
  }
  const scheduleMeasure = () => {
    if (frame === 0) frame = window.requestAnimationFrame(measure)
  }

  measure()
  const observer = new MutationObserver(scheduleMeasure)
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] })
  window.addEventListener('resize', scheduleMeasure, { passive: true })

  return () => {
    observer.disconnect()
    window.removeEventListener('resize', scheduleMeasure)
    window.cancelAnimationFrame(frame)
    root.style.removeProperty('--dsh-spiderverse-wallpaper-left')
  }
}

/** Resolve the wallpaper asset URL from the installed package's assets route. */
function resolveWallpaperUrl() {
  // The plugin is served at /plugins/<id>/client.js and its static files at
  // /plugins/<id>/assets/<file>; a root-relative URL is deterministic here.
  return 'url("/plugins/dsh-theme-spiderverse/assets/wallpaper.jpg")'
}

function applyWallpaperUrl() {
  document.documentElement.style.setProperty(
    '--dsh-spiderverse-wallpaper-url',
    resolveWallpaperUrl(),
  )
}

function installDust(settings) {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  const dust = createDustField(reducedMotion)
  const applySettings = () => dust.setSettings(settings.get().value)
  applySettings()
  const unsubscribe = settings.subscribe(applySettings)
  return () => {
    unsubscribe()
    dust.destroy()
  }
}

function SpiderverseSettingsRow(props) {
  const React = require('react')
  const state = React.useSyncExternalStore(props.spider.subscribe, props.spider.get, props.spider.get)
  const settings = state.value
  const message = state.error || (state.saving ? '正在保存…' : state.loading ? '正在读取设置…' : !state.editable ? '插件配置暂不可用，无法保存设置。' : '')
  const densityPercent = Math.round(settings.density * 100)
  const driftPercent = Math.round(settings.drift * 100)
  return React.createElement('section', { className: 'dsh-spiderverse-settings', 'data-dsh-spiderverse-settings': '' },
    message ? React.createElement('div', { role: state.error ? 'alert' : 'status', style: { gridColumn: '1 / -1' } }, message) : null,
    React.createElement('div', { className: 'dsh-spiderverse-copy' },
      React.createElement('strong', { className: 'dsh-spiderverse-badge' },
        React.createElement('span', { className: 'dsh-spiderverse-dot' }),
        '蜘蛛宇宙主题'
      ),
      React.createElement('span', null, '粉紫天空、橙色余晖与漫画半调网点，灵感来自 Spider-Verse 壁纸。')
    ),
    React.createElement('label', { className: 'dsh-spiderverse-switch' },
      React.createElement('input', {
        type: 'checkbox',
        disabled: !state.editable,
        checked: settings.enabled,
        onChange: (event) => { props.spider.set({ enabled: event.target.checked }) }
      }),
      React.createElement('span', null, '启用')
    ),
    React.createElement('div', { className: 'dsh-spiderverse-copy' },
      React.createElement('strong', null, '漂浮尘埃'),
      React.createElement('span', null, '随气流缓缓上升的彩色尘埃粒子，靠近鼠标时会轻轻被推开。')
    ),
    React.createElement('label', { className: 'dsh-spiderverse-switch' },
      React.createElement('input', {
        type: 'checkbox',
        disabled: !state.editable || !settings.enabled,
        checked: settings.particles,
        onChange: (event) => { props.spider.set({ particles: event.target.checked }) }
      }),
      React.createElement('span', null, '启用')
    ),
    React.createElement('label', { className: 'dsh-spiderverse-range' },
      React.createElement('span', null, `粒子密度 ${densityPercent}%`),
      React.createElement('input', {
        type: 'range',
        min: '20',
        max: '100',
        step: '1',
        value: densityPercent,
        disabled: !state.editable || !settings.enabled || !settings.particles,
        onChange: (event) => { props.spider.set({ density: Number(event.target.value) / 100 }) }
      })
    ),
    React.createElement('label', { className: 'dsh-spiderverse-range' },
      React.createElement('span', null, `漂浮速度 ${driftPercent}%`),
      React.createElement('input', {
        type: 'range',
        min: '10',
        max: '100',
        step: '1',
        value: driftPercent,
        disabled: !state.editable || !settings.enabled || !settings.particles,
        onChange: (event) => { props.spider.set({ drift: Number(event.target.value) / 100 }) }
      })
    )
  )
}

/**
 * Pin the host to its dark palette while the theme is applied.
 */
function installDarkPaletteLock() {
  const body = document.body
  const wasDark = body.hasAttribute(DARK_PALETTE_ATTRIBUTE)
  const applyPalette = () => {
    if (!body.hasAttribute(DARK_PALETTE_ATTRIBUTE)) body.setAttribute(DARK_PALETTE_ATTRIBUTE, '')
  }

  applyPalette()
  const observer = new MutationObserver(applyPalette)
  observer.observe(body, { attributes: true, attributeFilter: [DARK_PALETTE_ATTRIBUTE] })

  return {
    applyPalette,
    restore: () => {
      observer.disconnect()
      if (!wasDark) body.removeAttribute(DARK_PALETTE_ATTRIBUTE)
    }
  }
}

function installTokenOverrides() {
  const targets = [document.documentElement, document.body]
  const previous = new Map()
  const applyTokens = () => {
    for (const target of targets) {
      for (const [name, value] of Object.entries(SPIDERVERSE_TOKENS)) {
        const key = `${target === document.body ? 'body' : 'root'}:${name}`
        if (!previous.has(key)) {
          previous.set(key, {
            target,
            name,
            value: target.style.getPropertyValue(name),
            priority: target.style.getPropertyPriority(name)
          })
        }
        target.style.setProperty(name, value)
      }
    }
  }

  applyTokens()
  return {
    applyTokens,
    restore: () => {
      for (const value of previous.values()) value.target.style.setProperty(value.name, value.value, value.priority)
    }
  }
}

function apply(ctx) {
  if (!isBrowser()) return

  ctx.effect(() => {
    const style = installStyle()
    applyWallpaperUrl()
    const stopBackground = installBackgroundLayer()
    const stopOffsetSync = installWallpaperOffsetSync()
    const stars = createStarField(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true)
    const palette = installDarkPaletteLock()
    const tokens = installTokenOverrides()
    const form = createHostSettingsForm(ctx, PLUGIN_ID)
    const spider = createSettingsController(form)
    const stopDust = installDust(spider)
    document.documentElement.setAttribute('data-dsh-spiderverse-theme', '')
    /* Re-assert palette/tokens after the presenter settles each theme change. */
    ctx.on('theme/change', () => {
      queueMicrotask(() => {
        palette.applyPalette()
        tokens.applyTokens()
        applyWallpaperUrl()
      })
    })
    ctx.slots.inject('settings.general.item', () => ctx.slots.register({
      name: 'settings.general.item',
      id: 'spiderverse-theme-settings',
      order: 19,
      inject: () => ({ spider })
    }, SpiderverseSettingsRow))

    return () => {
      stopDust()
      spider.destroy()
      form.destroy()
      stars.destroy()
      stopOffsetSync()
      stopBackground()
      style?.remove()
      tokens.restore()
      palette.restore()
      document.documentElement.style.removeProperty('--dsh-spiderverse-wallpaper-url')
      document.documentElement.removeAttribute('data-dsh-spiderverse-theme')
    }
  }, 'spiderverse-theme: wallpaper, star field and dust particles')
}

module.exports = { apply, inject };
return module.exports; } });
