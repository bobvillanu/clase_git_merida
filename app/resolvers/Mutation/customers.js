const CustomersModel=require('/devf/backend_project/app/models/Customers');
const authenticate= require('/devf/backend_project/app/utils/authenticate');

const createCustomers= async(root,params,context,info)=>{
	console.log('hola');
	const newCustomer= await CustomersModel.create(params.data)
								.catch(e=>{throw new Error(e.message)})
									  
	if(!newCustomer) throw new Error("No se creo el 'Cliente'");								  
	
	return newCustomer.toObject();
}

const login= async(root,params,context,info)=>{
	const token= await authenticate(params).catch(e=>{throw e})
	return{
		token,
		message:"OK"
	}
}

module.exports={
	createCustomers,
	login
}