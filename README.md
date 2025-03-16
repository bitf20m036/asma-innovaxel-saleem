# asma-innovaxel-saleem

## 📌 Project Overview

This is a URL Shortener API that allows users to generate short links, retrieve original URLs, update shortened links, delete links, and view statistics.

## 🚀 Features

1. Generate short URLs

2. Retrieve original URLs

3. Update existing short URLs

4. Delete short URLs

5. Fetch statistics for shortened URLs

## 🔧 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Frontend: HTML, CSS, JavaScript

API Testing: Postman

## 🛠 Setup Instructions

1️⃣ Clone the Repository


`git clone https://github.com/{your-username}/{firstname}-innovaxel-{lastname}.git`


2️⃣ Install Dependencies


`cd {firstname}-innovaxel-{lastname}`

`npm install`


3️⃣ Start the Server


`npm start`


Server runs on `http://localhost:5001`


4️⃣ API Endpoints


| Method  | Endpoint          | Description                      |
|---------|------------------|----------------------------------|
| **POST**   | `/shorten`         | Generate a short URL            |
| **GET**    | `/shorten/:shortId`     | Retrieve the original URL       |
| **PUT**    | `/shorten/:shortId`     | Update an existing short URL    |
| **DELETE** | `/shorten/:shortId`     | Delete a short URL              |
| **GET**    | `/shorten/:shortId/stats` | Get stats for a short URL      |

