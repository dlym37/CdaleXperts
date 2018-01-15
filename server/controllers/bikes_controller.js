module.exports = {
    get_mountain: (req, res) => {
        const db = req.app.get('db');

        db.get_mountain().then(mntBikes => {
            res.status(200).send(mntBikes);
        })
    },
    get_mountain_styles: (req, res) => {
        const db = req.app.get('db');
        const { style } = req.params

        db.get_mountain_styles([style]).then(result => {
            res.status(200).send(result)
        })
    },
    get_road: (req, res) => {
        const db = req.app.get('db');

        db.get_road().then(roadBikes => {
            res.status(200).send(roadBikes);
        })
    },
    get_road_styles: (req, res) => {
        const db = req.app.get('db');
        const { style } = req.params;

        db.get_road_styles([style]).then(result => {
            res.status(200).send(result);
        })
    }
}