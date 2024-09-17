const db = require('../db')

async function login(username,password){
    const [result,fields] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username,password])
    return result.length > 0?  result[0] : {};
}



module.exports = async (req,res,next)=>{
    try{
    const {username, password} = req.body;
    const isLoginSuccess = await login(username, password);
    res.status(200)
    }catch(err){
        res.json({success : false, msg:err})
    }
}