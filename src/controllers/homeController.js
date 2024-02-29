import { json } from "body-parser";
import db from "../models/index";
import CRUDService from "../services/CRUDService"


let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}




let getAbout = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('test/about.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

let getCRUD = (req, res) => {
    return res.render('test/crud.ejs')
}


let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

//object:{
//key:'',
//value:''
//}

module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,

}