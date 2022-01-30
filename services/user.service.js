const boom = require('@hapi/boom');

class UserService {

  constructor(){

  };

  async create(data){
    const newUser={
      ...data
    }

    return newUser
  };

  async find(){
    return [];
  };

  async findOne(id){
    return {id};
  };

  async update(id, changes){
    return{
      id,
      changes,
    }
  };

  async delete(id){
    return {id}
  };

}

module.exports = UserService;
