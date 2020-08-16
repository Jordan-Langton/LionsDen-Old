import liveOrders from "./orders";

export default {

  "model": {
    ...liveOrders.model
  },
  "getters": {
    ...liveOrders.getters
  },
  "mutations": {
    ...liveOrders.mutations
  },
  "actions": {
    ...liveOrders.actions
  },

};