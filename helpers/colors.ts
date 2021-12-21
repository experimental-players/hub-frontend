import Color from 'chroma-js'

export function isDistant (backgroundColor: string) {
  return (Color.distance(backgroundColor, 'black') > 50)
}

export const fixColorString = (c: string): string => (Color.valid(c) ? Color(c) : Color('black')).hex()
