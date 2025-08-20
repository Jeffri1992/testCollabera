import { Given } from '@cucumber/cucumber';
import { expect } from 'chai';

import users from '../../features/functions/users.js';
import { isNumericId } from '../helpers-api/users.js';

const now = new Date();

Given('Create a new employee and Verify Id', async function () {
  const createResponse = await users.createUser();
  expect(createResponse.statusCode).to.equal(201) //201 means : 
  //A resource was successfully created in response to a POST request. 
  //The Location header contains the URL pointing to the newly created resource.
  console.log(`Date ${now}`);
  console.log(`Body Respond : ${JSON.stringify(createResponse.body)}`);
  console.log("\n");
  console.log("is id NumericId ", await isNumericId(createResponse.body.id))
  console.log("\n");
  console.log("\n");
});


Given('Verify First entry', async function () {
  const getResponse = await users.getUser();
  console.log(await getResponse.body[0]);
  expect(getResponse.statusCode).to.equal(200)
  console.log("First Data is : ", getResponse.body[0].status)
  console.log("\n");
  console.log("\n");
  //Spesific User added to system <--- this cannot, i tried to use spesific id  [/public/v2/users/7440263] // data not found 
  const getResponseSpesific = await users.getSpesificUser();
  console.log(await getResponseSpesific.body);
  expect(getResponse.statusCode).to.equal(200)
  console.log("User added is : ", getResponse.body.status)
});

Given('Show Total inactive',  { timeout: 60000 }, async function () {
  let page = 1;
  const perPage = 100;
  let totalInactive = 0;

  while (true) {
    const getResponse = await users.getAllUserInactive(page, perPage);
    const usersData = getResponse.body;

    if (usersData.length === 0) {
      break; // stop if doesnt have data
    }

    // count inactive
    const inactiveCount = usersData.filter(u => u.status === 'inactive').length;
    totalInactive += inactiveCount;

    page++;
  }

  console.log("Total Inactive Users:", totalInactive);
});

Given('Show Total active',  { timeout: 60000 }, async function () {
  let page = 1;
  const perPage = 100;
  let totalActive = 0;

  while (true) {
    const getResponse = await users.getAllUserActive(page, perPage);
    const usersData = getResponse.body;

    if (usersData.length === 0) {
      break; // stop if doesnt have data
    }

    // count inactive
    const activeCount = usersData.filter(u => u.status === 'active').length;
    totalActive += activeCount;

    page++;
  }

  console.log("Total Active Users:", totalActive);
});
