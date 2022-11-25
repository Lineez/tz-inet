<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <Filters />

      <List :users="sortedByCountryAndScore" :header="header" />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Filters from './Filters.vue';
import List from './List.vue';

export default {
  name: "ContentBlock",
  data: () => ({
    header: "List",
  }),
  components: { Filters, List },
  computed: {
    ...mapState({
      users: (state) => state.filters.users
    }),
    ...mapGetters({
      sortedByCountryAndScore: 'filters/sortedByCountryAndScore'
    })
  }
}
</script>
