module.exports = {
    checkForSession : (req, res, next) => {
        console.log(req.session.cart);
        if(!req.session.cart) {//is this where it is checking to see if they have visisted before?
            req.session.cart = []
            console.log('something more descriptive');

        }
        // req.session.cart = [('hello')];
        next();
    }
}

// in my user controller would i push items to session.cookie.cart?
//What about if they login in? is there where I would use an if statement?
