import z from '@deepseek-ai/schemastery'

// DSH persists volatile Config fields in the active profile's Cordis patch.
export const Config = z.object({
  enabled: z.boolean().default(true).description('启用蜘蛛宇宙主题').volatile(),
  particles: z.boolean().default(true).description('漂浮尘埃粒子').volatile(),
  density: z.number().min(0.2).max(1).default(0.7).description('粒子密度').volatile(),
  drift: z.number().min(0.1).max(1).default(0.5).description('漂浮速度').volatile(),
})

export function apply(ctx) {
  ctx.inject(['settings'], child => {
    if (typeof child.settings.register === 'function') {
      child.settings.register('dsh-theme-spiderverse', z.object({
        enabled: z.boolean().default(true),
        particles: z.boolean().default(true),
        density: z.number().min(0.2).max(1).default(0.7),
        drift: z.number().min(0.1).max(1).default(0.5),
      }))
    } else {
      child.effect(() => child.settings.configure({ auto: false }, ctx.fiber))
    }
  })
}
