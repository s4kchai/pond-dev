const db = require('../db')

module.exports = async (req,res,next)=>{
    try{
        const [result,_] = await db.query('SELECT * FROM users')
        res.status(200).json({success : true, data : result})
    }catch(err){
        res.status(200).json({success : false, msg:err.message})
    }
}