const CustomersModel=require('/devf/backend_project/app/models/Address');

const createAddress= async(root,params,context,info)=>{
	
	const newAddress= await AddressModel.create(params.data)
								.catch(e=>{throw new Error(e.message)})
									  
	if(!newAddress) throw new Error("No se creo el 'Direccion'");								  
	
	return newAddress.toObject();
}
module.exports={
	createAddress
}