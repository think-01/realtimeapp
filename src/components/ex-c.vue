<template>
  <ul>
    <li @click="onClick">{{counted}}</li>
    <li @click="onReset">reset</li>
    <li>{{xxx}}</li>
    <li>{{yyy}}</li>
  </ul>
</template>

<script>
import {injection as MyTrait} from "@/components/c.hoc";

export default MyTrait({
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
})
</script>