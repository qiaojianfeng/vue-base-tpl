<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="toggleLang">
      {{$t('index.lang',{lang})}}
    </button>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    lang() {
      return this.$i18n.locale
    }
  },
  methods: {
    toggleLang() {
      const lang = this.lang === 'cn' ? 'en' : 'cn'
      this.$changeLanguage(lang)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
