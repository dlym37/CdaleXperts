module.exports = {
    update_quantity: (req, res) => {

        const { productId, qty } = req.body;


        req.session.cart = [{
            product: productId,
            qty: qty
        }, ...req.session.cart];
       
        res.send();
    },
    get_cart_data: (req, res) => {
        const db = req.app.get('db');
        var cartArr = [];

        var product = req.session.cart.map((e, i) => {
            return db.mtn_cart_data([e.product])
        })

        Promise.all(product).then((resp) => {
            var subTotal = 0;
            var total = 0;
            var tax = 0;
            var prod = resp.map((product, i) => {
                product[0].qty = req.session.cart[i].qty;
                subTotal += (product[0].price * product[0].qty)
                return product[0]
            });
            
            tax = subTotal * .08,
            total = subTotal + tax;
            res.status(200).send({prod, subTotal, tax, total});
        })
    },
    remove_from_cart: (req, res) => {
        const {index} = req.body;
        // console.log('this is the req', req.body)
        // console.log(index)
        req.session.cart.splice(index, 1);
        res.send('Product Removed');
    },
    update_qty_cart: (req , res) => {
        // console.log(req.session.cart)
        const {value , index} = req.body;
        req.session.cart[index].qty = value;

        res.send();
    },
    send_address: (req, res) => {
        const {address, city, state, country, postalcode} = req.body;
        // const {customerid} = req.user;
        const customer = req.user && req.user.customerid ? req.user.customerid : null;
        const db = req.app.get('db');
        db.add_address_withID([customer, address, city, state, country, postalcode]).then ( resp => {
                res.status(200).send(resp);
        });
        
    }
}