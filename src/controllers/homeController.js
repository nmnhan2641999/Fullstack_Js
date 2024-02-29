
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

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('--------------------------------')
    console.log(data)
    console.log('--------------------------------')


    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}


let getEditCRUD = async (req, res) => {
    let userId = req.query.id;

    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // check user data not found
        return res.render('editCRUD.ejs', {
            user: userData
        })
    } else {
        return res.send("user not found")
    }

    // console.log(req.query.id)

}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}


module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,

}