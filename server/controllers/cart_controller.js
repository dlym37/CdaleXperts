module.exports = {
    update_quantity: (req, res) => {
        // const { cart } = req.session;
        const { productId, qty } = req.body;
        // console.log(req.body)

        req.session.cart = [{
            product: productId,
            qty: qty
        }, ...req.session.cart];
        // var newCart = [...cart, {
        //     product: productId,
        //     qty: qty
        // }]
        // console.log(req.session);
        res.send();
    },
    get_cart_data: (req, res) => {
        const db = req.app.get('db');
        var cartArr = [];

        var product = req.session.cart.map((e, i) => {
            return db.mtn_cart_data([e.product])
        })

        Promise.all(product).then((resp) => {
            var obj = resp.map((product, i) => {
                product[0].qty = req.session.cart[i].qty;
                return product[0]
            })
            res.status(200).send(obj);
        })
    },
    remove_from_cart: (req, res) => {
        console.log('before', req.session.cart)
        const {index} = req.body;
        req.session.cart.splice(index, 1);
        console.log('removed', req.session.cart);
        res.send('Product Removed');
    }
}