# Employee Management System

## Project Overview

The Employee Management System is a full-stack web application developed to help HR teams manage employee records efficiently. The application allows users to add, view, and delete employee information through a user-friendly interface.

## Technology Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Features

### Add Employee

Users can add employee details including:

* Name
* Email
* Department
* Designation

### View Employees

All employee records are displayed dynamically from MongoDB.

### Delete Employee

Users can remove employee records from the system.

## Project Structure

employee-management-system

├── frontend

├── backend

│ ├── models

│ ├── routes

│ └── server.js

## API Endpoints

### GET /employees

Returns all employee records.

### POST /employees

Creates a new employee record.

### DELETE /employees/:id

Deletes an employee record.

## Database

MongoDB Atlas is used as the cloud database for storing employee records.

## How to Run

### Backend

npm install

node server.js

### Frontend

npm install

npm run dev

## Future Enhancements

* Employee Update Functionality
* Employee Search Functionality
* Authentication and Authorization
* Pagination and Filtering

## Developed By

Hari K
