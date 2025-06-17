# 🍽️ Food Delivery Web App

A full-stack food delivery application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to browse meals, add items to cart, and place food orders online.

---

## 🚀 Features

- 🍔 View available meals with images and prices
- 🛒 Add items to cart and manage quantities
- 📅 Select delivery date/time
- 🔐 User authentication (optional)
- 💳 Mock checkout/payment process
- 📦 Real-time order tracking (basic)
- 🧾 Order summary and confirmation
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

| Technology     | Description                    |
|----------------|--------------------------------|
| React.js       | Frontend UI                    |
| Tailwind CSS / CSS | Styling                     |
| Node.js        | Backend runtime                |
| Express.js     | RESTful API                    |
| MongoDB        | Database                       |
| Mongoose       | ODM for MongoDB                |
| React Router   | Routing for SPA navigation     |
| Toastify       | Notifications                  |
| Render         | Deployment                     |

---

## 📂 Folder Structure

```bash
foodDelivery/
│
├── backend/                  # Express + MongoDB backend
│   ├── models/               # Mongoose models
│   ├── routes/               # API endpoints
│   ├── controllers/          # Business logic
│   └── index.js              # Entry point for server
│
├── frontend/                 # React frontend
│   ├── components/           # Reusable components
│   ├── pages/                # Page-level components
│   └── App.js                # App entry point
│
├── .env                      # Environment variables
├── package.json              # Dependencies
└── README.md                 # Project documentation


git clone https://github.com/sumantkum/foodDelivery.git
cd foodDelivery


cd backend
npm install
# Add your MongoDB URI in .env
npm start


cd ../frontend
npm install
npm start
