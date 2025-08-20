# testAmartha

- First, go to api folder [cd/testCollabera/api]
- Npm i
- Run Command : npm test -- --tags=@all [for running all testcase]
if you want run spesific Testcase : npm test -- --tags=@create-user-and-verify-id OR npm test -- --tags=@check-user-verify-status


After run will get cucumber report.

Programing Information
- Java Script
- Frame work : WebdriverIO
- Using Languange : Cucumber [BDD]
- Have Folder :
  1. Function -> Contain URL API, BODY. METHOD
  2. Helpers-api -> global variabel or unique method
  3. Scenario -> Scenario writes in gherkin languange
  4. Step def -> Logic
- Report using : cucumber
- no need any env
- .gitIgnore and .eslintRc no needed
