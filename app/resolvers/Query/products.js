const CustomersModel=require('/devf/backend_project/app/models/Products');

const listProducts=async(root,params,context,info)=>{
	const product= await ProductsModel.find({});
	return product
}

module.exports={
        listProducts 
    }