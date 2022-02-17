declare module '*.svg'
declare module '*.svg?inline'

type Heights = '12' | '16' | '24'

interface svgOptions<key> {
  version: string
  width: number
  height: key
  viewBox: string
  class: string
  [key: string]: unknown
}

declare module '@primer/octicons' {
  const octicons: {
    [key: string]: {
      name: string
      keywords: string[]
      heights: {
        [key in Heights]: {
          width: number
          path: string
          options: svgOptions<key>
        }
      }
      symbol: string
      toSVG(options?: Partial<svgOptions<Heights>>): string
    }
  }

  export default octicons
}
