var mongoose=require("mongoose");  // requiero la libreria moongoose
mongoose.Promise = require('bluebird');  // necesario para no aparezcan errores
var Schema=mongoose.Schema;


var comentarios_schema=new Schema({  // creo esquema de la bbdd
  Nombre:{type:String,required:true},
  Correo:{type:String,required:true,match:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/},
  Sitio:{type:String},
  Comentario:{type:String,required:true},
  Fecha:{type:Date,required:true},
  id_articulo:{type:Number,required:true},
  extension:{type:String},
  id_comentario:{type:String},
  id_respuesta:{type:String},
  respuestas:{type:Object}
  //creator:{type: Schema.Types.ObjectId,ref:"User"}, // añade una referenicia a la tabla user
  //extension:{type:String,required:true}
});

var comentario=mongoose.model("comentario",comentarios_schema); // creo un modelo

module.exports=comentario;


/*  Insertar un comentario
var  respuesta={
        "Nombre" : "Marta",
        "Correo" : "marta@hotmail.com",
        "Sitio" : "http://marta.com.ar",
        "Comentario" : "Esta es una respuesta al comentario ...!!!",
        "Fecha" : new Date(),
        "id_articulo" : 1
}

//db.comentarios.update({Nombre:"Antonella",Correo:"anto@hotmail.com",Fecha:ISODate("2016-09-12T21:41:48.997Z")},{$push:{respuestas:respuesta}});
*/

