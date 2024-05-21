const Work = require('../models/Work');
const { mongooseToObject } = require('../../util/mongoose');

class WorkController {
    // [GET] /works/create
    create(req, res, next) {
        res.render('./works/create');
    }

    // [POST] /works/store
    store(req, res, next){
        const formData = req.body;
        const work = new Work(formData);
        work.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    //
    edit(req, res, next) {
        Work.findById(req.params.id)
            .then(work => res.render('./works/:id/edit', {
                work: mongooseToObject(work)
            }))
            .catch(next)
    }

    // [PUT] /works/:id
    update(req, res, next) {
        Work.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // [DELETE] /works/:id
    delete(req, res, next){
        Work.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new WorkController();