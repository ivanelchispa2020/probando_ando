var express = require('express');
var router = express.Router();
var Articulo=require("../models/articulos.js");


/* GET home page. */
router.get('/', function(req, res, next) {	

	var total_articulos=0;
	Articulo.find().count().then((data)=>{
		 total_articulos=data;
	}, (err)=>{
		res.render('index',{err,err})
	})

	Articulo.find().limit(5).sort({Fecha:-1}).then((data)=>{
		 res.render('index', { articulos:data,total:total_articulos});
	}, (err)=>{
		res.render('index',{err,err})
	})
});


module.exports = router;
