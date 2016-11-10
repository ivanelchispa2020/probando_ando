var mongoose=require("mongoose");  // requiero la libreria moongoose
mongoose.Promise = require('bluebird');  // necesario para no aparezcan errores
var Schema=mongoose.Schema;

/// conecto a la base de datos
mongoose.connect("mongodb://localhost/Articulos",(err)=>{
		if(err){
				console.log("Error al conectar la base de datos" + err);
		}else{
				console.log("La conexion ha sido exitosa");
		}
}); // si no existe la creea

var articulo_schema=new Schema({  // creo esquema de la bbdd
		Titulo:{type:String,required:true},
		Parrafo:{type:String,required:true},
		Parrafo_principal:{type:Object,required:true},
		Autor:{type:String,required:true},
		Fecha:{type:Date,required:true},
		id_articulo:{type:Number,required:true},
		id_categoria:{type:Number,required:true},
		video:{type:String},
		imagen:{type:String}
		//creator:{type: Schema.Types.ObjectId,ref:"User"}, // añade una referenicia a la tabla user
});

var articulo=mongoose.model("articulo",articulo_schema); // creo un modelo

module.exports=articulo;


/*
var parrafos=["Por su parte .NET también es una excelente plataforma de desarrollo, por algo hay desarrolladores que tiene blogs dedicados a esta tecnología. Además pertenece a una empresa como Microsoft, que no es poca cosa. Esta empresa tiene más del 90% de participación en el mercado de sistemas operativos de escritorio, a pesar que hace años Linux y OS X han ganado terreno, no es un porcentaje que vaya a variar mucho, por lo menos en el mediano plazo. Es cierto que ha disminuido el uso de PC’s en favor de dispositivos como tablets y smartphones; pero es un terreno donde Microsoft también está dando la pelea, aunque hay que reconocer que le está costando bastante.","Factores decisivos","Dicho lo anterior, creo que la decisión sobre qué tecnología usar depende de varios factores, algunos de requerimientos (no funcionales) y otros subjetivos. A continuación enumero algunos de los que, desde mi punto de vista, podrían inclinar la balanza hacía uno de los lados. No todos los factores tienen el mismo peso, cada uno lo pondera de distinta forma. Inclusive, hay algunos de ellos que pueden ser decisivos por sí solos.","Los ganadores somos nosotros, que tenemos dos excelentes plataformas de desarrollo para elegir, y si queremos (y el tiempo nos da) podemos elegir ambas. Pienso que debemos ser más prácticos y constructivos sobre este asunto, evitando las peleas que no tienen sentido o están entrampadas, invirtiendo ese tiempo en conocer más a fondo nuestra tecnología favorita. Tampoco pretendo que este post sea un debate entre software libre y software propietario, pues ya he mencionado que en ambos bandos hay ropa tendida.","Con este artículo quise hacer una breve reflexión sobre esta discusión, no con el ánimo de imponer mi forma de pensar o mis opiniones, sino para contribuir a que los debates sobre este tema sean más prácticos y sustentables. "];


var art=new articulo({Titulo:"Java vs .NET",Parrafo:"Java es un excelente lenguaje de programación, JavaSE/JavaEE es una excelente plataforma de desarrollo. Pertenece a un grande de la industria como es Oracle, además de contar el respaldo de gigantes como IBM, RedHat, entre otros. Además, en sus últimas versiones el lenguaje Java ha implementado muchas funcionalidades que ya estaban presentes en .NET, lo que contribuye un poco a quitarle esa fama de dinosaurio que se había ganado últimamente. Finalmente, el crecimiento de Android le ha dado un empuje (algo indirecto, pero real) a la plataforma.", Parrafo_principal:parrafos,Autor:"Ivan sergio lopez",Fecha:new Date(), id_articulo:24,id_categoria:1,imagen:"imagen24.jpg",video:"https://www.youtube.com/embed/2dlYXsCLEMk"});
*/
/*
				art.save().then((articulo)=>{
		console.log("articulo creado correctamente");
				},(err)=>{
				console.log("error" + err);
				});
*/