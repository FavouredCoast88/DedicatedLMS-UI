# Dedicated News UI

A React frontend application built with Vite that connects to the Dedicated News API.

The application allows users to:

- Authenticate using JWT
- Create articles
- View articles
- Search articles
- Update articles
- Delete articles
- View external news articles
- Logout securely using session storage

## Technologies Used

- React
- Vite
- Axios
- JavaScript
- CSS

## Installation

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:3000
```

## Features

### Authentication

- Login using username
- JWT token storage using Session Storage
- Logout functionality

### Article Management

- Create Articles
- View Articles
- Search Articles
- Edit Articles
- Delete Articles

### External News

- Fetch and display external news from the backend API

## API Connection

This application communicates with the Dedicated News API for:

- Authentication
- CRUD Operations
- News Retrieval

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```
