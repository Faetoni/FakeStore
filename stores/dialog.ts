import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => {
    return {
      visible: <boolean>false,
      component: null as Object | null,
      title: null as string | null,
      subtitle: null as string | null,
      width: <number>660,
      args: <Object>{}
    }
  },

  actions: {
    open (component: Object, { title, subtitle, width }, args) {
      this.$patch({
        visible: true,
        component,
        title,
        subtitle,
        width,
        args
      })
    },

    reset () {
      this.$patch({
        component: null,
        title: null,
        subtitle: null,
        width: 600
      })
    },

    close () {
      this.visible = false

      setTimeout(() => this.reset(), 150)
    }
  }
})
