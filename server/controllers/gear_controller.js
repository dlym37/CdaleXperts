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
        console.log(request);
        const mountain = db.search_mountain([`%${request}%`]);
        const road = db.search_road([`%${request}%`]);
        const gear = db.search_gear([`%${request}%`]);
        
        Promise.all([mountain, road, gear]).then((response) => {
            console.log('response', response);
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
    },
    get_gear_info: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.get_gear_info([id]).then(result => {
            res.status(200).send(result);
        })
    }
}

// function capitalize(str){
//     var split = str.split('')
//     var spaces = split.indexOf(' ');
//     var index = [];
//     index.push(-1);
//     while (spaces != -1){
//       index.push(spaces);
//       spaces = split.indexOf(' ', spaces + 1);
//     }
//     function doIt (arr1, arr2){
//       var idx = [];
//       var letters = [];
//       for(var i = 0; i < arr2.length; i++){
//       idx.push(arr2[i]+1);
//       var capital = arr1[arr2[i]+1].toUpperCase();
//       letters.push(capital);
//     }
//     for(var i =0; i < idx.length; i++){
//       arr1.splice(idx[i], 1, letters[i])
//     }
//     console.log(idx, letters);
//     return arr1.join('')
//     }
    
//     return doIt(split, index);
//   }