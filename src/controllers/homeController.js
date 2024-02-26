import { json } from "body-parser";
import db from "../models/index"


let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
let getAbout = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('test/about.ejs', {
            data: JSON.stringify(data)
        })


    } catch (error) {
        console.log(error);
    }

}

//object:{
//key:'',
//value:''
//}

module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
}