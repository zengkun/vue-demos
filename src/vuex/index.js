export default {
    state: {
        count: '0'
    },
    mutations: {
        SET_COUNT(state, count) {
            state.count = count;

            // Vuex.Store、vuex-router-sync
            // state.route.path // current path (string)
            // state.route.params // current params (object)
            // state.route.query // current query (object)
            console.log(state.route.path);
        }
    },
    actions: {
        setCount({
            commit
        }, count) {
            commit('SET_COUNT', count);
        }
    },
    getters: {
        getCount: (state) => state.count
    }
}
