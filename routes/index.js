var express = require('express');
var router = express.Router();
const db = require('./db')


router.get('/',(req,res,next)=>{
    res.json({success: true})
})

async function getUser() {
    const result = await db.query('SELECT * FROM users');
    return result.rows; 
}

router.get('/test', async function (req, res, next) {
    try {
        const users = await getUser();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Database query failed.' });
    }
});


module.exports = router;
