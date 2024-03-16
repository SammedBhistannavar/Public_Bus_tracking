const user = require("../models/user.model")


//~~~~~~HOME_PAGE~~~~~~~~~~~~~~~~~~~~
const home = async(req,res)=>{
    try {
        res.status(201).send("I Am in Controler..")
    } catch (error) {
        console.log("Error In home func..",error)
    }
}

//~~~~~~~~~~~~~~~Cheaking Buses in that Route~~~~~~~~~~~~~~~~~~~~~~~~~

const register = async(req,res)=>{
    try {
        const {username,email,Mobile_no,start_point,destination} = req.body;

        const route_exist =user.findOne({start_point:start_point})
        
        if(!route_exist){
            return res.status(400).json({ message : "this route is not  exists"});
        }
        console.log(req.body)

    const user_avail =  await user.create({username,email,Mobile_no,start_point,destination})

        res.status(201).json(req.body);
    } catch (error) {
        console.log(" Data Fetching Error..",error)
        res.status(400).send("Data Fetching error")
    }
}

module.exports = { home, register };