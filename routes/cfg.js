// import lib
const express = require('express');
const db = require('../util/db.config');
// define variable
const sequelize = db.sequelize;
const Web1 = db.web1;
const Web2 = db.web2;
const Credit_document_set_2013 = db.credit_document_set_2013;
const App_service_list = db.app_service_list;
const route = express.Router();
route.get('/', async (req, res, next) => {
    let web1 = {};
    web1 = await Web1.findAll();
    res.json(web1);
  });
  route.get('/a', async (req, res, next) => {
    let web2 = {};
    web2 = await Web2.findAll();
    res.json(web2);
  });
 
  route.get('/credit', async (req, res, next) => {
    let credit_document_set_2013 = {};
    credit_document_set_2013 = await Credit_document_set_2013.findAll({where: {ID:[131226114210526]}});
    res.json(credit_document_set_2013);
  });

  route.get('/service', async (req, res, next) => {
    let app_service_list = {};
    app_service_list = await App_service_list.findAll();
    // console.log(app_service_list[i].name);
    //   var ckeckResCode ;
    //   request.get(app_service_list[i].name, (error, response, body) => {
    //        if (error){
    //         console.log(400);
    //         ckeckResCode = 400;
    //         //this.ckeckResCode = 400;
    //       }else{
    //         console.log(response.statusCode);
    //         //ckeckResCode = 200;
    //         ckeckResCode = 200;
    //       }
    //       });
      
    //       app_service_list[i].STATUS = ckeckResCode ;
  
  
  
    res.json(app_service_list);
  });




//create Web1 >> insert
route.post('/create', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const web1 = req.body;
    let newWeb1 = null;
    if (web1) {
        newWeb1 = await sequelize.transaction(function(t) { // not success rollback
        // chain all your queries here. make sure you return them.
        return Web1.create(web1, { transaction: t });
      });
    }
    res.json(newWeb1);
  });
  // get blog with id
route.get('/findid/:id&:name', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const web1Id = req.params.id;
    const web1Name = req.params.name;
    console.log(' web1Id ', web1Id);
    console.log(' web1Name ', web1Name);
    let web1 = {};
    if (web1Id) {
      web1 = await Web1.findByPk(web1Id);
    }
    res.json(web1);
  });
module.exports = route;