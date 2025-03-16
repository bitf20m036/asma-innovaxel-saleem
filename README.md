# asma-innovaxel-saleem

📌 **Project Overview**
This is a URL Shortener API that allows users to generate short links, retrieve original URLs, update shortened links, delete links, and view statistics.

🚀 **Features**
Generate short URLs
Retrieve original URLs
Update existing short URLs
Delete short URLs
Fetch statistics for shortened URLs

🔧 **Tech Stack**
Backend: Node.js, Express.js
Database: MongoDB
Frontend: HTML, CSS, JavaScript
API Testing: Postman

**🛠 Setup Instructions**

1️⃣ Clone the Repository
bash
git clone https://github.com/{your-username}/{firstname}-innovaxel-{lastname}.git

2️⃣ Install Dependencies
bash
cd {firstname}-innovaxel-{lastname}
npm install

3️⃣ Start the Server
bash
npm start
Server runs on http://localhost:5001

4️⃣ API Endpoints
Method	Endpoint	Description
POST	/shorten	Generate short URL
GET	/shorten/:id	Retrieve original URL
PUT	/shorten/:id	Update short URL
DELETE	/shorten/:id	Delete short URL
GET	/shorten/:id/stats	Get URL statistics
