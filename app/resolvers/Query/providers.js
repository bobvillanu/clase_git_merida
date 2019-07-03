const CustomersModel=require('../../models/Providers');

const listProviders=async(root,params,context,info)=>{
	const provider= await ProvidersModel.find({});
	return provider
}

module.exports={
        listProviders  
    }