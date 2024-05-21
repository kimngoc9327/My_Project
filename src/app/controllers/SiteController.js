const Work = require("../models/Work");
const { multipleMongooseToObject } = require('../../util/mongoose');
let moment = require('moment'); 


class SiteController{

    index(req, res, next){
        Work.find({})
            .then( works => {
                res.render('home', {
                    works: multipleMongooseToObject(works),
                });
            })
            .catch(next);
    }

}

module.exports = new SiteController();