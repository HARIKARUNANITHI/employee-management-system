# Employee Management System

## Overview

The Employee Management System is a full-stack web application developed for HR operations. It allows users to manage employee records efficiently through a simple and user-friendly interface.

## Features

* Add Employee
* View Employee Records
* Delete Employee Records
* MongoDB Atlas Integration
* REST API Backend
* Responsive User Interface

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

## Project Structure

```text
employee-management-system
│
├── frontend
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│
└── README.md
```

## API Endpoints

### Get All Employees

```http
GET /employees
```

### Add Employee

```http
POST /employees
```

### Delete Employee

```http
DELETE /employees/:id
```

## Installation

### Clone Repository

```bash
git clone https://github.com/HARIKARUNANITHI/employee-management-system.git
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Database

MongoDB Atlas is used as the cloud database for storing employee information.

## Future Enhancements

* Update Employee Functionality
* Employee Search Functionality
* Authentication & Authorization
* Employee Filtering and Sorting

## Author

Hari K
