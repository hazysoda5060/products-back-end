module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_product()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_product([params.id, query.desc])
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_product(id)
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    }
}