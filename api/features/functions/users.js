import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import { users, getRandomGender, getRandomStatus } from '../helpers-api/users.js'
import { faker } from '@faker-js/faker';


export const profile = {

  async getUser() {
    return Bluebird.promisifyAll(superagent).get(`https://gorest.co.in/public/v2/users`)
  },

  async getAllUserInactive(page,perPage) {
    return Bluebird.promisifyAll(superagent).get(`https://gorest.co.in/public/v2/users?page=${page}&per_page=${perPage}&status=inactive`)
  },

  async getAllUserActive(page,perPage) {
    return Bluebird.promisifyAll(superagent).get(`https://gorest.co.in/public/v2/users?page=${page}&per_page=${perPage}&status=active`)
  },

  async getSpesificUser() {
    return Bluebird.promisifyAll(superagent).get(`https://gorest.co.in/public/v2/users?name=${users.name}`)
  },

  async createUser() {
    users.name = faker.person.fullName()
    users.gender = await getRandomGender()
    users.status = await getRandomStatus()
    users.email = faker.internet.email()
    console.log("Body Contain")
    console.log("============")
    console.log("Name: ", users.name)
    console.log("Gender: ", users.gender)
    console.log("Status: ", users.status)
    console.log("Email: ", users.email)
    console.log("\n")
    return Bluebird.promisifyAll(superagent).post(`https://gorest.co.in/public/v2/users`)
      .set('Authorization', 'Bearer 14359f31ee90b333f945c1793fe0d9b7e844f23e0d7c553c31c258844491144a')
      .send(
        {
          "name": users.name,
          "gender": users.gender,
          "email": users.email,
          "status": users.status
        }
      )
  }

};
export default profile;
