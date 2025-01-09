# RideMate: A Smart Transport Booking System

## Overview

RideMate is a transport booking service inspired by Uber, designed to showcase advanced JavaScript capabilities and PostgreSQL integration. This project demonstrates a robust architecture for handling user interactions, data management, and responsive design.

---

## Features

### 1. User Authentication
- **Description:** Users (clients and drivers) can create accounts and log in.
- **Implementation:**
  - Store user credentials in PostgreSQL.
  - Define distinct user roles (Client and Driver).
- **Frontend:**
  - Login/registration page with fields for email, password, and user type.

### 2. Interactive Map with Geolocation
- **Description:** Displays the user's location and available vehicles on a map.
- **Implementation:**
  - Use **Google Maps API** or **Leaflet.js** for the map.
  - Fetch the user’s location using the **Geolocation API**.
- **Frontend:**
  - Map component showing current location and nearby vehicles.

### 3. Trip Booking
- **Description:** Allows users to book trips by selecting a destination.
- **Implementation:**
  - Calculate distance and cost (e.g., 2€/km).
  - Store trip details (origin, destination, client ID, driver ID, etc.) in PostgreSQL.
- **Frontend:**
  - Input field for destination address.
  - Display estimated cost and a "Book" button.

### 4. Driver Management
- **Description:** Drivers can view assigned trips and mark them as "In Progress" or "Completed."
- **Implementation:**
  - Fetch and display trips assigned to a driver.
  - Update trip status in PostgreSQL.
- **Frontend:**
  - List of assigned trips with status update buttons.

### 5. Trip History
- **Description:** Clients and drivers can view their completed trips.
- **Implementation:**
  - Retrieve trip history from PostgreSQL.
- **Frontend:**
  - Table or list showing trip details (origin, destination, distance, cost).

### 6. Online Payment
- **Description:** Simulates payment functionality for booking confirmation.
- **Implementation:**
  - Integrate a payment API like **Stripe** (or simulate payments).
- **Frontend:**
  - Payment form with total cost displayed.

### 7. Responsive Design
- **Description:** Ensures the application works seamlessly on mobile, tablet, and desktop.
- **Implementation:**
  - Use **Bootstrap** or media queries for responsive design.
- **Frontend:**
  - Test layouts on different screen sizes.

---

## Directory Structure

```plaintext
RideMate/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── components/
│   │   ├── map.js
│   │   ├── booking.js
│   │   └── payment.js
│   └── assets/
│       └── images/
├── backend/
│   ├── model/
│   │   ├── userModel.js
│   │   └── tripModel.js
│   ├── view/
│   │   └── templates/
│   ├── controller/
│   │   ├── userController.js
│   │   └── tripController.js
│   └── database_access/
│       └── database.js
├── README.md
└── package.json




## 🛠️ Technologies Used  
- **JavaScript (ES6+)**: The core of all logic, interactivity, and asynchronous operations.  
- **HTML5 & CSS3**: Semantic structure and responsive styling for the frontend.  
- **PostgreSQL**: Database to store user profiles, trip data, and payment information.  
- **Google Maps API / Leaflet.js**: Integrated map services for geolocation and vehicle tracking.  
- **Stripe API**: Payment gateway for processing online transactions (or a simulated payment option).  
- **Node.js & Express**: Server-side framework to handle requests and serve the backend API.  

---


## 💻 How to Run the Project  

### 1. **Set up PostgreSQL**  
   - Create a PostgreSQL database and configure the connection in the `database.js` file located in the `backend/database_access` directory.  
   - Set up the necessary tables for **users**, **trips**, and **payments** based on the schema in the project.

### 2. **Install Backend Dependencies**  
   - Navigate to the `backend` directory and install the required Node.js packages:  
     ```bash
     cd backend  
     npm install
     ```

### 3. **Start the Backend Server**  
   - Run the backend server to handle API requests:  
     ```bash
     node server.js
     ```

### 4. **Install Frontend Dependencies**  
   - Navigate to the `frontend` directory and install the frontend dependencies:  
     ```bash
     cd frontend  
     npm install
     ```

### 5. **Start the Frontend Development Server**  
   - Launch the frontend application:  
     ```bash
     npm start
     ```

### 6. **Access the Application**  
   - Open your browser and navigate to:  
     ```
     http://localhost:3000
     ```

---

## 🛠️ Technologies Used  
- **JavaScript (ES6+)**: Core logic and interactivity.  
- **HTML5**: Structure and semantic elements.  
- **CSS3**: Styling and responsive design.  
- **Node.js**: Backend server handling API requests.  
- **PostgreSQL**: Database for storing user and trip information.  
- **Google Maps API / Leaflet.js**: For displaying interactive maps and geolocation.  
- **Stripe API**: For simulating online payments.

---

## 📜 License  
RideMate is licensed under the **MIT License**. See the LICENSE file for more details.