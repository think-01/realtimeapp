<template>
  <ul>
    <li @click="onClick">{{counted}}</li>
    <li @click="onReset">reset</li>
    <li>{{xxx}}</li>
    <li>{{yyy}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      xxx: 'xxx'
    }
  },
  computed: {
    yyy() {
      return 'yyy'
    }
  },
  methods: {
    onReset() {
      this.num = 0
    }
  },
  created(){
    this.onReset()
  }
}
</script>