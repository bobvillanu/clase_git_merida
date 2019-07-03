const CustomersModel=require('../../models/Address');

const listAddress= async(root,params,context,info)=>{
	const address= await AddressModel.find({});
	return address
}

module.exports={
        listAddress
    }