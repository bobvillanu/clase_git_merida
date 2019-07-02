const bcrypt = require('bcrypt');
const CustomersModel =  require('../models/Customers');
const createToken =  require('./createToken');

const authenticate =  ({ email, password }) => {
	return new Promise((resolve,reject) => {

		CustomersModel.findOne({email}).then((user) => {
			if(!user) reject(new Error("Usuario no existe"))

			bcrypt.compare(password,user.password,(err,isValid) => {
				if(err) reject(new Error("Error al crear el Token "))
			
				isValid ? resolve(createToken(user)) : reject("Password no coinciden")

			})


		}).catch(e  => reject(e) );

	})

}

module.exports =  authenticate;