const db = require('../db')

async function register(user_data){
    const [result,_] = await db.query('SELECT * FROM ') 
}


module.exports = async (req,res,next)=>{
    try{
        const {username,password} = req.body;
        const user_data = {
            username
            password
        }

    }catch(err){
        res.status(200).json({success : false, msg:err.message})
    }
}