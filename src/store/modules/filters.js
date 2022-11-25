// все что тут находится можно откуда-то загрузить
export default {
    namespaced: true,
    state: {
        selectedCountry: null,
        selectedScore: null,
        countries: [
            "russia",
            "usa",
        ],
        scores: [
            "> 20",
            "< 10",
        ],
        users: [
            // Что это?
            // { divider: true, inset: true }, 
            {
              avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
              title: "Brunch this weekend?",
              subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
              country: 'usa',
              score: 21,
              address: 'some address',
            },
            {
              avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
              title: "Summer BBQ <span class=\"grey--text text--lighten-1\">4</span>",
              subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
              country: 'russia',
              score: 10,
              address: 'some address',
            },
            {
              avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
              title: "Oui oui",
              subtitle: "<span class=\"text--primary\">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
              country: 'usa',
              score: 2,
              address: 'some address',
            },
            {
              avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
              title: "Birthday gift",
              subtitle: "<span class=\"text--primary\">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
              country: 'usa',
              score: 5,
              address: 'some address',
            },
            {
              avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
              title: "Recipe to try",
              subtitle: "<span class=\"text--primary\">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
              country: 'usa',
              score: 32,
              address: 'some address',
            },
        ],
    },
    mutations: {
        mutSelectedCountry(state, payload) {
            state.selectedCountry = payload;
        },
        mutSelectedScore(state, payload) {
            state.selectedScore = payload;
        },
    },
    actions: {
        setSelectedCountry({ commit }, value) {
            commit('mutSelectedCountry', value)
        },
        setSelectedScore({ commit }, value) {
            commit('mutSelectedScore', value)
        },
    },
    getters: {
        sortedByCountry(state) {
            if(!state.selectedCountry) return state.users;
            return state.users.filter((user) => user.country === state.selectedCountry);
        },
        sortedByCountryAndScore(state, getters) {
            if(!state.selectedScore) return getters.sortedByCountry;

            const [operator, score] = prepareSelectedScore(state.selectedScore);
            return getters.sortedByCountry.filter((user) => operatorMap[operator](user.score, score))
        },
    }
}

// можно убрать куда-то
const operatorMap = {
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
}

const prepareSelectedScore = (value) => value.split(' ');