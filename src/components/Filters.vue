<template>
  <v-col cols="12" md="4">
    <v-select v-model="selectedCountry" :items="countries" clearable label="Filter by country"></v-select>

    <v-select v-model="selectedScore" :items="scores" clearable label="Filter by score"></v-select>
  </v-col>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {

    }
  },
  computed: {
    selectedCountry: {
      get() {
        return this.$store.selectedCountry;
      },
      set(value) {
        return this.$store.dispatch('filters/setSelectedCountry', value);
      }
    },
    selectedScore: {
      get() {
        return this.$store.selectedScore;
      },
      set(value) {
        return this.$store.dispatch('filters/setSelectedScore', value);
      }
    },
    ...mapState({
      countries: (state) => state.filters.countries,
      scores: (state) => state.filters.scores,
    })
  }
}
</script>

<style lang="scss">

</style>