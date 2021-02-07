const { Mongoose } = require('mongoose');
const model = require('../models/user')

const options = {
    page: 1,
    limit: 4
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getData = (req, res ) =>{
    model.paginate({}, options, (err, docs) =>{
        res.send({
            items: docs
        })
    })
}

exports.insertData = (req, res) =>{
    const data = req.body 
    model.create(data, (err, docs) =>{
        if (err){
            res.send({ error: 'Ya existe un usuario con este correo'}, 422)
        }else{ 
            res.send({ data: docs})
        }
    }) 

} 

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.deleteSingle = (req, res) => {
    const { id } = req.params.id
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

