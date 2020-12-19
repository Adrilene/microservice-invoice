const axios = require('axios');

async function get_order(order_id) {
    var response = await axios.get(`http://localhost:5003/${order_id}`)
    var order = response.data
    return order

}


async function get_values(products) {
    var values = []
    products.forEach(product => {
        var response = await axios.get(`http://localhost:5000/${product}`)
        values.push(response.data['price'])
    });
    return values
}

async function get_data(order_id) {
    var order = await get_order(req.query.order_id)
    var values = await get_values(order.products)
    var data = {
        nfe_id: order.nfe_id,
        date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
        payment_method: order.payment_method,
        products: order.products,
        values: values,
        name: "provisorio",
        cpf: "provisorio",
        address: "provisorio"
    }
    return data

}

module.exports = {
    get_data: get_data
}