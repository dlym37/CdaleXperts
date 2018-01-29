module.exports ={
    get_all_gear : (req, res) => {
        const db = req.app.get('db');

        db.get_all_gear().then(stuff => {
            res.status(200).send(stuff);
        })
    }
}