export default {

    "model": {
        orders: [{
                orderUId: 147360,
                user: 'Jordan Langton',
                phone: '0670014872',
                notes: '',
                unitNumber: '1',
                orderTotal: '298.94',
                status: '1',
                stared: false,
                address: 'Rosebank Mall, Cradock Avenue, Rosebank'
            },
            {
                orderUId: 147363,
                user: 'Danielle Dansie',
                phone: '0670014872',
                notes: '',
                unitNumber: '21',
                orderTotal: '298.94',
                status: '1',
                stared: true,
                address: 'Rosebank Mall, Cradock Avenue, Rosebank'
            },
            {
                orderUId: 147361,
                user: 'Josh langton',
                phone: '0670014872',
                notes: 'Hoot at gate',
                unitNumber: '43',
                orderTotal: '298.94',
                status: '1',
                stared: false,
                address: 'Rosebank Mall, Cradock Avenue, Rosebank'
            },
            {
                orderUId: 147362,
                user: 'Seth Langton',
                phone: '0670014872',
                notes: 'Just nock at door',
                unitNumber: '32',
                orderTotal: '298.94',
                status: '1',
                stared: true,
                address: 'Rosebank Mall, Cradock Avenue, Rosebank'
            },
            {
                orderUId: 147364,
                user: 'Markus',
                phone: '0670014872',
                notes: 'Shout for me',
                unitNumber: '55',
                orderTotal: '298.94',
                status: '1',
                stared: false,
                address: 'Rosebank Mall, Cradock Avenue, Rosebank'
            },
        ],
    },
    "getters": {
        getLiveOrders({
            $model
        }) {
            return $model.orders;
        }
    },
    "mutations": {
        loadOrdersIntoState({
            $model
        }, payload) {

        },
        starOrder({
            $model
        }, payload) {
            $model.orders.forEach(order => {
                if (order.orderUId == payload.uid) {
                    order.stared = payload.value;
                }
            });
        }
    },
    "actions": {
        getLiveOrdersFromServer({
            Commit
        }, payload, callback) {

        }
    },

};