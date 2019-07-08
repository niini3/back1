// import lib
const express = require('express');
const db = require('../util/db.config');
const Sequelize = require('sequelize');
const request = require('request');
// define variable
const sequelize = db.sequelize;
const Web1 = db.web1;
const Web2 = db.web2;
const Credit_document_set_2013 = db.credit_document_set_2013;
const App_service_list = db.app_service_list;
const route = express.Router();
const Op = Sequelize.Op
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
    app_service_list = await App_service_list.findAll(
      {
        where : {
          STATUS_WEB: "A"
        }
        ,order: [
          ['APP_NAME', 'ASC']
          ,['IP', 'ASC']
        ]
       // ,limit: 50
      }
    );
    for (let i = 0 ; i < app_service_list.length; i++) {
      if(app_service_list[i].URL.includes('https') || 
      app_service_list[i].URL == 'http://10.100.10.106/IMWebService/services/AuTOBizWeBService?wsdl' ||
      app_service_list[i].URL == 'http://10.100.10.203/IMWebService/services/AuTOBizWeBService?wsdl' ||
      app_service_list[i].URL == 'http://10.100.10.104/IMWebService/services/AuTOBizWeBService?wsdl' ){
        var startDate = Date.now();
        try {
          const res = await GetResponseCode(app_service_list[i].URL)
          console.log(" Return res : " + res);
          app_service_list[i].STATUS_CODE = Number(res);
          app_service_list[i].RESPONSE = Date.now() - Number(startDate);
          console.log(" Print Re : " +app_service_list[i].URL+" "+ app_service_list[i].STATUS_CODE + " --- " + app_service_list[i].RESPONSE);  
        } catch (error) {
                console.error('ERROR:');
                console.error(error);
        }
      }
    }
    var returnOut = await getAppNameColSpan(app_service_list);
    console.log(" Go Go ");
    res.json(returnOut);
  });
// wrap a request in an promise
function GetResponseCode(url) {
  console.log(url)
  return new Promise((resolve, reject) => {
    // request('url', (error,res,body) => {  in function   })
      request(url, (error, response, body) => {
          if (error) reject(error);
          console.log(response)
          if(!response) reject(error);
          if (response.statusCode != 200) {
            
              reject('Invalid status code <' + response.statusCode + '>');
          }
        
          resolve(response.statusCode);
      });
  });
}
  route.post('/service1', async (req, res, next) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const serviceAPPNAME = req.body.APP_NAME;
    const serviceServiceName = req.body.SERVICE_NAME;
    const serviceIP = req.body.IP;
    let app_service_list = {};
    app_service_list = await App_service_list.findAll(
      {
        where : {
          STATUS_WEB: "A",
          APP_NAME : {
            [Op.like]: '%'+serviceAPPNAME+'%'
          },
          SERVICE_NAME : {
            [Op.like]: '%'+serviceServiceName+'%'
          },
          IP : {
            [Op.like]: '%'+serviceIP+'%'
          }
        }
        ,order: [
          ['APP_NAME', 'ASC']
          ,['IP', 'ASC']
        ]
        //,limit: 10
      }
    );
    for (let i = 0 ; i < app_service_list.length; i++) {
      if(app_service_list[i].URL.includes('https') || 
      app_service_list[i].URL == 'http://10.100.10.106/IMWebService/services/AuTOBizWeBService?wsdl' ||
      app_service_list[i].URL == 'http://10.100.10.203/IMWebService/services/AuTOBizWeBService?wsdl' ||
      app_service_list[i].URL == 'http://10.100.10.104/IMWebService/services/AuTOBizWeBService?wsdl' ){
        var startDate = Date.now();
        try {
          const res = await GetResponseCode(app_service_list[i].URL)
          console.log(" Return res : " + res);
          app_service_list[i].STATUS_CODE = Number(res);
          app_service_list[i].RESPONSE = Date.now() - Number(startDate);
          console.log(" Print Re : " +app_service_list[i].URL+" "+ app_service_list[i].STATUS_CODE + " --- " + app_service_list[i].RESPONSE);  
        } catch (error) {
                console.error('ERROR:');
                console.error(error);
        }
      }
    }
    var returnOut = await getAppNameColSpan(app_service_list);
    res.json(returnOut);
  });

  async function getAppNameColSpan(input){
    //console.log("in getAppNameColSpan"); 
    ///console.log(input); 
    let colAppName=[];
    let colIP=[];
    var count = {};
    var countIP = {};
    // get all app name
    for(let i = 0 ; i < input.length;i++ ){
        colAppName.push(input[i].APP_NAME);
    }
    // count duplicate app_name
    colAppName.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    //console.log(count);
    // Selected value mapping with Counting APP_name
    for(let [a,b] of Object.entries(count)){
      //console.log(a+" "+b);
      for(let j = 0 ; j < input.length;j++ ){
            if(input[j].APP_NAME == a){
              input[j].COLSPAN_APP_NAME = Number(b);
              // Fill IP
              colIP.push(input[j].IP);
            }
      }
      colIP.forEach(function(k) { countIP[k] = (countIP[k]||0) + 1;});
      for(let l = 0 ; l < input.length;l++ ){
        if(input[l].APP_NAME == a){
          for(let [c,d] of Object.entries(countIP)){
            //console.log(c+" "+d);
            if(input[l].IP == c){
              input[l].COLSPAN_IP = Number(d);
            }
          }
        }
      }
      colIP = [];
      countIP = {};
    }
    //console.log(input);
    return input;
}

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