const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ProvidersSchema= new Schema({
	
	first_name:{
		type:String,
		required:true
	},
	last_name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	address:{
		/*listado de direcciones*/
		type:[Schema.Types.ObjectId],
		ref:'address' 
	},
	profile_picture:{
		type:String
	},
	balance:{ 
		/*saldo actual*/
		type:Number,
		require:true,
		default:0
	},
	score:{
		/*puntaje*/
		type:Number,
		default:0
	},
	is_active:{
		type:Boolean,
		default:true
	}
},{collection:"providers",timestamps:true});



module.exports= mongoose.model('providers',ProvidersSchema);