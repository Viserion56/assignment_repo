# assignment_repo
Documentation.
API Endpoints
1. Creating  Poll
Endpoint: POST /polls/create
Request:
Method: POST
URL: http://localhost:3000/polls/create
Body:
json
Copy code
{
  "question": "string",
  "options": ["string"],
  "createdBy": "string"
}
Response:
Status Code: 201 Created
Body:
json
Copy code
{
  "message": "Poll created successfully",
  "pollId": 1
}
2. Retrieve Polls by User
  Endpoint: GET /polls/user/:username
  Request:
  Method: GET
  URL: http://localhost:3000/polls/user/:username
  Response:
  Status Code: 200 OK
  Body:
  json
  Copy code
[
  {
    "id": 1,
    "question": "string",
    "options": ["string"],
    "createdBy": "string",
    "selectedOption": null,
    "votes": 0,
    "created_at": "timestamp"
  }
]

