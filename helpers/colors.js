import Color from 'chroma-js'

export function isDistant (backgroundColor) {
  return (Color.distance(backgroundColor, 'black') > 50)
}
