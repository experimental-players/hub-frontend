import { isDistant } from '@/helpers/colors'

export default {
  computed: {
    bannerColor: () => 'black',
    bannerImage: () => null,
    bannerStyle () {
      return {
        background: `linear-gradient(to right, ${this.bannerColor} 30%, rgba(0, 0, 0, .1)), ` + (this.bannerImage ? `url(${this.bannerImage})` : this.bannerColor)
      }
    },
    bannerForegroundStyle () {
      return {
        color: isDistant(this.bannerColor) ? 'black' : 'white'
      }
    }
  }
}
