async function get_user_info(user_id) {
    const axios = require('axios');
    var response = await axios.get(`http://localhost:5006/user_by_id/${user_id}`)
    var user = response.data
    return user
}

async function get_order(order_id) {
    const axios = require('axios');
    var response = await axios.get(`http://localhost:5002/order/${order_id}`)
    var order = response.data
    return order

}


async function get_values(products) {
    const axios = require('axios')
    var values = []
    for (var i = 0; i < products.length; i++) {
        var response = await axios.get(`http://localhost:5000/product/${products[i]}`)
        p = { 'name': response.data['name'], 'price': response.data['price'].toFixed(2) }
        values.push(p)
    }
    return values
}


function sum_value(products) {

    value = 0
    for (var i = 0; i < products.length; i++) {
        value += parseFloat(products[i]['price'])
    }
    return value.toFixed(2)
}

async function get_data(order_id) {
    var order = await get_order(order_id)
    var products = await get_values(order.products)
    var user = await get_user_info(order.user_id)
    var today = new Date()
    var data = {
        nfe_id: order.nfe_id,
        date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
        payment_method: order.payment_method,
        products: products,
        name: user.name,
        cpf: user.cpf,
        address: `${user.address}, ${user.number}, ${user.city} - ${user.state}`,
        value: `R$ ${sum_value(products)}`
    }
    console.log(data)
    return data

}

module.exports = {
    get_data: get_data
}