G!M | Grilling Inventory Management System

This application is a Node.js-based inventory management system for tracking meats, vegetables, and drinks. It provides RESTful routes for CRUD operations, uses JSX for views, and has a robust middleware setup for handling static files and data processing.

Features

RESTful API routes for managing inventory (meats, vegetables, drinks)

JSX-based view rendering for dynamic web pages

Middleware for:

Parsing request bodies

Method overriding

Serving static files

Error handling and logging

Modular code structure for scalability

Setup

Clone the repository:

git clone https://github.com/NicoHub007/2024-318-SBA-Express-Server-Application.git
cd 2024-318-SBA-Express-Server-Application

Install dependencies:

npm install

Start the application:

npm start

Access the application at http://localhost:3000.

Usage

Adding New Items

Navigate to /api/meats/new, /api/vegetables/new, or /api/drinks/new to add new items.

Viewing Items

Visit /api/meats, /api/vegetables, or /api/drinks to view the respective inventory.

Editing Items

Use /api/meats/:id/edit, /api/vegetables/:id/edit, or /api/drinks/:id/edit to edit existing items.

Deleting Items

Submit a DELETE request to /api/meats/:id, /api/vegetables/:id, or /api/drinks/:id.

API Routes

Method

Endpoint

Description

GET

/api/meats

View all meats

GET

/api/vegetables

View all vegetables

GET

/api/drinks

View all drinks

POST

/api/meats

Add a new meat

PUT

/api/meats/:id

Update a meat by ID

DELETE

/api/meats/:id

Delete a meat by ID

Similarly, routes are available for vegetables and drinks.

Views

The application uses JSX for rendering views. Each category (meats, vegetables, drinks) has:

index.jsx: Lists all items.

new.jsx: Form for adding a new item.

edit.jsx: Form for editing an existing item.

show.jsx: Details for a specific item.

A shared default layout is defined in views/layouts/default.jsx.

Technologies Used

Node.js: Backend runtime environment.

Express.js: Web framework.

JSX View Engine: For server-side rendering.

body-parser: Parsing request bodies.

method-override: Support for HTTP verbs like PUT and DELETE.

JavaScript: Programming language.

Inventory Manager API

The Inventory Manager API allows users to manage collections of meats, drinks, and vegetables. Each resource provides routes for CRUD operations.

Base URL

The API is hosted on localhost:5052.

Routes Overview

Index Route

GET /: Renders the home page (index view).

Meat Routes

Method

Endpoint

Description

GET

/api/meats

Fetches all meats and renders the index view.

GET

/api/meats/new

Renders a form to add a new meat.

POST

/api/meats

Adds a new meat to the database.

GET

/api/meats/:id/edit

Renders a form to edit an existing meat.

PUT

/api/meats/:id

Updates an existing meat.

DELETE

/api/meats/:id

Deletes a meat.

GET

/api/meats/:id

Displays details of a single meat.

Vegetable Routes

Method

Endpoint

Description

GET

/api/vegetables

Fetches all vegetables and renders the index view.

GET

/api/vegetables/new

Renders a form to add a new vegetable.

POST

/api/vegetables

Adds a new vegetable to the database.

GET

/api/vegetables/:id/edit

Renders a form to edit an existing vegetable.

PUT

/api/vegetables/:id

Updates an existing vegetable.

DELETE

/api/vegetables/:id

Deletes a vegetable.

GET

/api/vegetables/:id

Displays details of a single vegetable.

Drink Routes

Method

Endpoint

Description

GET

/api/drinks

Fetches all drinks and renders the index view.

GET

/api/drinks/new

Renders a form to add a new drink.

POST

/api/drinks

Adds a new drink to the database.

GET

/api/drinks/:id/edit

Renders a form to edit an existing drink.

PUT

/api/drinks/:id

Updates an existing drink.

DELETE

/api/drinks/:id

Deletes a drink.

GET

/api/drinks/:id

Displays details of a single drink.

Error Handling

Each route has error handling to respond with an appropriate status code (e.g., 500 for server errors, 400 for client errors) and log the error message to the console.

Dependencies

The API uses the following technologies:

Express: Web framework for Node.js.

MongoDB: Database for storing inventory data.

Mongoose: ODM for MongoDB.

Ensure you have the required models (meats, drinks, and vegetables) set up in the models folder.

