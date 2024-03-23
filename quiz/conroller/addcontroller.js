const { name } = require('ejs');
var add = require('../model/addmodel');
var randoml = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
exports.add = async (req, res) => {

    req.body.image = req.file.originalname

    var data = await add.create(req.body)

    res.status(200).json({
        status: "insert table",
        data
    })
}

exports.get = async (req, res) => {

    var data = await add.find()

    var randomData = data[Math.floor(Math.random() * data.length)]   
    var letter = [];
    for (var i = 0; i < randomData.name.length*2; i++) {
        if(i<randomData.name.length)
        letter.push(randomData.name[i])
        else{
            letter.push(randoml[Math.floor(Math.random() * randoml.length)])  
        }
    }
    Suffle(letter);
    res.status(200).json({
        status: "success",
        randomData,
        letter
    })
    function Suffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}