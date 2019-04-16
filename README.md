# Backend for Party Planner

https://party-planner-backend.herokuapp.com/

 Authentication Endpoints | .
------ | ------
 https://party-planner-backend.herokuapp.com/register | .
 POST | username, password 

 https://party-planner-backend.herokuapp.com/login | .
 POST | username, password
 Response | username, userId, token 


| Party Endpoints |
---------- | -----------
| https://party-planner-backend.herokuapp.com/parties |
| POST | party_name, n_of_guests, date, theme, budget, user_id |
| GET | /parties |
| GET | /parties/:id |
| PUT | /parties/:id |
| DELETE | /parties/:id |


| Shopping List Endpoints |
--------- | ----------
| https://party-planner-backend.herokuapp.com/parties/:id/shopping |
| item, purchased(bool), price, party_id  |
| POST | /parties/:id/shopping |
| GET | /parties/:id/shopping |
| GET | /parties/:id/shopping/:id |
| PUT | /parties/:id/shopping/:id |
| DELETE | parties/:id/shopping/:id |


| To do List Endpoints |
-------------- | ----------------------
| https://party-planner-backend.herokuapp.com/parties/:id/todo |
| item, completed(bool), party_id  |
| POST | /parties/:id/todo |
| GET | /parties/:id/todo |
| GET | /parties/:id/todo/:id |
| PUT | /parties/:id/todo/:id |
| DELETE | parties/:id/todo/:id |

