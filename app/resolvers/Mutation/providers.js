const CustomersModel=require('../../models/Providers');

const createProviders= async(root,params,context,info)=>{
	
	const newProviders= await ProvidersModel.create(params.data)
								.catch(e=>{throw new Error(e.message)})
									  
	if(!newProviders) throw new Error("No se creo el 'Proveedor'");								  
	
	return newProviders.toObject();
}

module.exports={
	createProviders
}