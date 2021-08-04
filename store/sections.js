import Section from '@/models/Section';
import Link from '@/models/Link';

// FIXME: https://github.com/vuex-orm/vuex-orm/issues/255

export const state = () => ({
  list: [
    {
      ...new Section(
        'Minecraft',
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png',
        'https://cdnb.artstation.com/p/assets/images/images/013/535/601/large/supawit-oat-fin1.jpg?1540053395',
        '#45fd45',
        new Link('View', '/section/Minecraft')
      ),
      glow: true
    },
    {
      title: 'Discord',
      icon: 'https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-flat-style-available-svg-png-eps-10.png',
      image: 'https://i.pinimg.com/originals/fd/91/13/fd91131ea693096d6be5e8aa99d18f9e.jpg',
      color: '#7289da',
      glow: true
    },
    {
      title: 'GitHub',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      color: 'black'
    },
    {
      title: 'Empty'
    }
  ]
});

export const getters = {
  everySection (state) {
    return state.list;
  }
}
