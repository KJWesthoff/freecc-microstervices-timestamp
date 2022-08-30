const express = require('express')
const router = express.Router();


router.get('', function(req, res){
    dateObj = new Date()
    res.json({  
        'unix':dateObj.getTime(),
        'utc': dateObj.toUTCString()
    })
});

router.get('/:datestring?', (req,res,next)=>{
    
    let dateObj
    const datestring = req.params.datestring
    
    console.log("datestring",datestring)

    
    // check if its a number
    if(isNaN(datestring)){
        dateObj = new Date(datestring)
    } else {
        dateObj = new Date(Number(datestring))
    }

    // check if the date is not valid
    if(dateObj == "Invalid Date"){
        console.log("its null")
        res.json({error:"Invalid Date"})
        next()
        return
    }
    
    res.json({    
        'unix':dateObj.getTime(),
        'utc': dateObj.toUTCString()
    })

})




  

module.exports = router;