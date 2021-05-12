module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_product()
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_product()
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
        dbInstance.update_product()
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_product()
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'uhooooooohhh'})
            console.log(err)
        })
    }
}