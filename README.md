# Inventory Manager API

The Inventory Manager API allows users to manage collections of meats, drinks, and vegetables. Each resource provides routes for CRUD operations.

## Base URL

The API is hosted on `localhost:5052`.

## Routes Overview

### Index Route
`GET /`
- Renders the home page (`index` view).

### Meat Routes

#### Index
`GET /api/meats`
- Fetches all meats and renders the `meats/index` view.

#### New
`GET /api/meats/new`
- Renders a form to add a new meat (`meats/New` view).

#### Create
`POST /api/meats`
- Adds a new meat to the database.

#### Edit
`GET /api/meats/:id/edit`
- Renders a form to edit an existing meat (`meats/Edit` view).

#### Update
`PUT /api/meats/:id`
- Updates an existing meat in the database.

#### Delete
`DELETE /api/meats/:id`
- Deletes a meat from the database.

#### Show
`GET /api/meats/:id`
- Displays details of a single meat (`meats/Show` view).

---

### Vegetable Routes

#### Index
`GET /api/vegetables`
- Fetches all vegetables and renders the `vegetables/index` view.

#### New
`GET /api/vegetables/new`
- Renders a form to add a new vegetable (`vegetables/New` view).

#### Create
`POST /api/vegetables`
- Adds a new vegetable to the database.

#### Edit
`GET /api/vegetables/:id/edit`
- Renders a form to edit an existing vegetable (`vegetables/Edit` view).

#### Update
`PUT /api/vegetables/:id`
- Updates an existing vegetable in the database.

#### Delete
`DELETE /api/vegetables/:id`
- Deletes a vegetable from the database.

#### Show
`GET /api/vegetables/:id`
- Displays details of a single vegetable (`vegetables/Show` view).

---

### Drink Routes

#### Index
`GET /api/drinks`
- Fetches all drinks and renders the `drinks/index` view.

#### New
`GET /api/drinks/new`
- Renders a form to add a new drink (`drinks/New` view).

#### Create
`POST /api/drinks`
- Adds a new drink to the database. The `caffeine` field is handled as a boolean.

#### Edit
`GET /api/drinks/:id/edit`
- Renders a form to edit an existing drink (`drinks/Edit` view).

#### Update
`PUT /api/drinks/:id`
- Updates an existing drink in the database. The `caffeine` field is handled as a boolean.

#### Delete
`DELETE /api/drinks/:id`
- Deletes a drink from the database.

#### Show
`GET /api/drinks/:id`
- Displays details of a single drink (`drinks/Show` view).

---

## Error Handling

Each route has error handling to respond with an appropriate status code (e.g., `500` for server errors, `400` for client errors) and log the error message to the console.

---

## Usage

Open your browser and navigate to http://localhost:5052.
Use the specified API routes for CRUD operations on meats, vegetables, and drinks.

---

## Dependencies

The API uses the following technologies:
- **Express**: Web framework for Node.js.
- **MongoDB**: Database for storing inventory data.
- **Mongoose**: ODM for MongoDB.

Ensure you have the required models (`meats`, `drinks`, and `vegetables`) set up in the `models` folder.

