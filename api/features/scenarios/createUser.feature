@all
Feature: User
@create-user-and-verify
Scenario: Create 1 user with required details and verify that user has been created.
  Given Create User

@check-user-verify-details
Scenario: Get the user with the same username as created in first (create user) case and verify that the user details are correctly retrieved
  Given Get Detail User
