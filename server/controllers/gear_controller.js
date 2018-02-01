module.exports ={
    get_all_gear : (req, res) => {
        const db = req.app.get('db');

        db.get_all_gear().then(stuff => {
            res.status(200).send(stuff);
        })
    },
    search_products: (req, res) => {
        const db = req.app.get('db');
        const request = req.query.value;

        const mountain = db.search_mountain([request]);
        const road = db.search_road([request]);
        const gear = db.search_gear([request]);

        Promise.all([mountain, road, gear]).then((response) => {
            var mtnInfo = response[0].map((e, i) => {
                return {
                    id : e.id,
                    type: e.type,
                    title: e.brand + ' ' + e.model + ' ' + e.modelnum,
                    price: e.price,
                    picture: e.picture
                }
            })
            var roadInfo = response[1].map((e,i) => {
                return {
                    id: e.id,
                    type: e.type,
                    title: e.brand + ' ' + e.model + ' ' + e.drivetrain,
                    price: e.price,
                    picture: e.picture
                }
            })
            var gearInfo = response[2].map((e, i) => {
                return {
                    id: e.gearid,
                    type: e.type,
                    title: e.title + ' ' + e.color + ' ' + e.gender,
                    price: (e.price - e.discount),
                    picture: e.picture
                }
            })
            res.status(200).send([...mtnInfo, ...roadInfo, ...gearInfo]);
        })
    }
}