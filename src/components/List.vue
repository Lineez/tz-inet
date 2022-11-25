<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list three-line>
        <v-subheader v-if="header" :key="header" v-text="header"></v-subheader>
        
        <template v-for="item in users">
          <v-list-item :key="item.title">
            <v-list-item-avatar @click="showAddress(item.address)">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

  </v-col>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
    header: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    showAddress(address) {
      alert(address);
    }
  }
}
</script>

<style lang="scss">

</style>