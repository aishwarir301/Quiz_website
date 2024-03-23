var user_model = require('../model/usermodel')

exports.index = async (req, res) => {
    req.body.image = req.file.originalname

    var data = await user_model.create(req.body);

    res.status(200).json({
        status: "insert all data",
        data
    })
}