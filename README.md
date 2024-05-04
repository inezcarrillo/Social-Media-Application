# Social-Media-Application


This is a social network API for a web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API is built using Express.js, MongoDB, and Mongoose ODM.

# Table of Contents
Installation
Usage
API Routes
Technologies
Contributing
License
# Installation
Clone the repository:
bash
Copy code
git clone https://github.com/inezcarrillo/social-media-application.git
Install dependencies:
bash
Copy code
cd social-network-api
npm install
Set up your MongoDB database.
Start the server:
bash
Copy code
npm start


# Usage
Once the server is running, you can interact with the API using tools like Insomnia or Postman.

# API Routes
Users
GET /api/users: Get all users
GET /api/users/:userId: Get a single user by ID
POST /api/users: Create a new user
PUT /api/users/:userId: Update a user by ID
DELETE /api/users/:userId: Delete a user by ID
Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list
Thoughts
GET /api/thoughts: Get all thoughts
GET /api/thoughts/:thoughtId: Get a single thought by ID
POST /api/thoughts: Create a new thought
PUT /api/thoughts/:thoughtId: Update a thought by ID
DELETE /api/thoughts/:thoughtId: Delete a thought by ID
Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought

# Technologies
Express.js
MongoDB
Mongoose ODM
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

# License


