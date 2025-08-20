@all
Feature: User

@create-user-and-verify-id
#Using https://gorest.co.in/public/v2/users
#Create a new employee entry with Name, Gender, Email and Status (active or inactive)
#Verify id returned is in numerical format
Scenario: Create 1 user with required details and verify that user has been created by id.
  Given Create a new employee and Verify Id
  
#Using https://gorest.co.in/public/v2/users
#Verify status for first entry is only either "active" or "inactive"
@check-user-verify-status
Scenario: Verify First entry is active or inactive
  Given Verify First entry
  Then Show Total active
  Then Show Total inactive
