const CustomersModel=require('../../models/Customers');

const listCustomers= async(root,params,context,info)=>{
	const customer= await CustomersModel.find({});
	return customer
}


module.exports={
	listCustomers	
}