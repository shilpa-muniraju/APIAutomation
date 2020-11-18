@apiserviceval
Feature: API services validation flows for Posts, Comments and Users services
  
    @validatepostsapi
    Scenario Outline: Validate that user can send "Posts" api service request successfully and ensure api returns appropriate "Post" information from social network system
    Given I setup the required URI to run posts service
    When I send the posts api service request with given input parameters "<parameters>"
    Then I validate the posts service response code "<status>"
    And I validate the posts api service returns appropriate number of posts from system "<numofposts>" 
    And I validate posts api returns response with appropriate details "<parameters>"
    And I validate posts api response includes given attributes
    |userId   |
    |id       |
    |title    |
    |body     |
    
	 Examples: 
     | parameters                |  status    |numofposts    |
     | userId - 5                |  200       |10            |
     | id - 50                   |  200       |1             |
     | id - 50,userId - 5        |  200       |1             |
     
     
     
     
    @validatecommentsapi
    Scenario Outline: Validate that user can send "Comments" api service request successfully and ensure api returns appropriate "Comment" information from social network system
    Given I setup the required URI to run comments service
    When I send the comments api service request with given input parameters "<parameters>"
    Then I validate the comments service response code "<status>"
    And I validate the comments api service returns appropriate number of comments from system "<numofcomments>" 
    And I validate comments api returns response with appropriate details "<parameters>"
    And I validate comments api response includes given attributes
    |postId   |
    |id       |
    |name     |   
    |body     |
    |email    |
   
	 Examples: 
     |parameters                       |  status    |numofcomments |
     | postId - 2                      |  200       |5             |
     | email - Mallory_Kunze@marie.org |  200       |1             |
     | postId - 2,id - 6               |  200       |1             |
     
     
    @validateuserapi
    Scenario Outline: Validate that user can send "Users" api service request successfully and ensure api returns appropriate "user" information from social network system
    Given I setup the required URI to run users service
    When I send the users api service request with given input parameters "<parameters>"
    Then I validate the users service response code "<status>"
    And I validate the users api service returns appropriate number of users from system "<numofusers>" 
    And I validate users api returns response with appropriate details "<parameters>"
    And I validate users api response includes given attributes
    |id       |
    |name     |
    |phone    |
    |email    |    
    |website  |
    |company  |
    |address  |
    
	 Examples: 
     |parameters                                                          |  status    |numofusers    |
     | id - 1                                                             |  200       |1             |
     | username - Karianne                                                |  200       |1             |
     | name - Clementine Bauch,website - ramiro.info,username - Samantha  |  200       |1             |
    