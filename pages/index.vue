
<template>
  <div>
    <div class="hero is-dark is-bold is-medium banner">
      <div class="hero-body container">
        <div class="has-text-centered">
          <h1 class="title is-0">
            <span>Experimental Players</span>
            <small class="has-text-primary has-text-bold"><sup>HUB</sup></small>
          </h1>
        </div>
      </div>
    </div>

    <div class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <BubbleSection
            v-for="(item, n) in items"
            :key="n"
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Minecraft',
          icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png',
          image: 'https://cdnb.artstation.com/p/assets/images/images/013/535/601/large/supawit-oat-fin1.jpg?1540053395',
          color: '#45fd45'
        },
        {
          title: 'Discord',
          icon: 'https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-flat-style-available-svg-png-eps-10.png',
          image: 'https://i.pinimg.com/originals/fd/91/13/fd91131ea693096d6be5e8aa99d18f9e.jpg',
          color: '#7289da'
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
    }
  }
}
</script>
