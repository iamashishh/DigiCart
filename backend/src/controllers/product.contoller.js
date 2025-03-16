const formidable = require('formidable');

module.exports.createProduct = async (req, res,next) => {
    const form  = new formidable({keepExtensions:true});

    form.parse(req,async(err,files,fields)=>{
        if(err){
            return res.status(400).json({
                error:"Error parsing the form "
            });
        }

        try {
            
        } catch (error) {
            
        }
    })
}