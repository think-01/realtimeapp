export const injection = wrapped => ({
      ...wrapped,
      data() {
          return {
              ...wrapped.data(),
              num: 1
          }
      },

      methods: {
          ...wrapped.methods,
          onClick() {
              this.num ++;
          }
      },

      computed: {
          ...wrapped.computed,
          counted() {
              return `Value: ${this.num}`
          }
      }
})

export const hoc = wrapped => ({
    render: h => h(injection(wrapped))
})