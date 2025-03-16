const formidable = require('formidable');

module.exports.createProduct = async (req, res,next) => {
    const form  = new formidable({keepExtensions:true});

    form.parse()
}