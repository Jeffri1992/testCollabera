import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import helpers from '../helpers-api/users.js'

const randomIdUnique = Math.floor(Date.now() / 1000)
helpers.id = randomIdUnique

export const users = {

  async getUser() {
    return Bluebird.promisifyAll(superagent).get(`https://petstore.swagger.io/v2/user/jeffri92${helpers.id}`)
  },

  async createUser() {
    console.log("Body Contain")
    console.log("============")
    console.log("ID: ", randomIdUnique)
    console.log(`UserName: jeffri92${randomIdUnique}`)
    console.log("\n")
    return Bluebird.promisifyAll(superagent).post(`https://petstore.swagger.io/v2/user`)
      .send(
        {
          "id": randomIdUnique,
          "username": `jeffri92${randomIdUnique}`,
          "firstName": "test",
          "lastName": "test",
          "email": "a@gmail.com",
          "password": "asd",
          "phone": "0847812232",
          "userStatus": 0
        }
      )
  }

};
export default users;
