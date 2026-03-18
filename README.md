# 🚀 Service Selection Portal

A full-stack web application that allows users to check service availability, select broadband plans with add-ons, and submit their details through a lead generation system.

---

## 🔗 Live Demo

🌐 Frontend (Vercel):  
https://service-selection-portal.vercel.app/

🛠 Backend API (Render):  
https://service-selection-portal.onrender.com/api/leads

> ⚠️ Note: Backend may take 10–20 seconds to respond initially due to cold start (Render free tier).

---

## 🌐 Live Features

* 📍 **Pincode-based service detection**

  * Pincodes starting with `370` → Fiber Plans
  * Others → Wireless Plans

* 📦 **Plan Selection**

  * Basic, Standard, Premium plans
  * Dynamic UI with selection highlight

* ➕ **Add-ons**

  * OTT (only for plans above ₹999)
  * DishTV

* 🧾 **Checkout Summary**

  * Auto calculation:

    * Base Price
    * Add-ons
    * 18% GST
    * Final Total

* 📋 **Lead Generation Form**

  * Name, Phone, Address
  * Data stored in MongoDB

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS (Latest v4)
* JavaScript (ES Modules)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Tools

* pnpm (Package Manager)
* Concurrently (Run frontend + backend together)
* Nodemon (Backend auto-restart)

---

## 📁 Project Structure

```
Service_Selection_Portal/
│
├── frontend/       # React + Tailwind
├── backend/        # Express + MongoDB
├── package.json    # Root (concurrently setup)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```
git clone https://github.com/gurmitasahare369/service-selection-portal
cd Service_Selection_Portal
```

---

### 2️⃣ Install dependencies

```
pnpm install
cd frontend && pnpm install
cd ../backend && pnpm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside **backend/**

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 4️⃣ Run the project

From root folder:

```
pnpm run dev
```

---

## 📡 API Endpoint

### Create Lead

```
POST /api/leads
```

#### Body:

```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "address": "India",
  "plan": "Premium",
  "addons": ["OTT", "DishTV"],
  "total": 2181.82
}
```

---

## 🧪 How to Test

1. Enter any 6-digit pincode  
2. If it starts with `370` → Fiber plans  
3. Otherwise → Wireless plans  
4. Select a plan  
5. Choose add-ons  
6. Fill the form and submit  
7. Data gets stored in MongoDB  

---

## 📱 UI Highlights

* Responsive Design (Mobile + Desktop)
* Clean UX with step-by-step flow
* Interactive plan selection
* Real-time price calculation

---

## 💡 Key Learnings

* Full-stack integration (React + Express + MongoDB)
* State management across multiple steps
* Conditional UI rendering
* REST API design
* Form validation & data handling

---

## 👩‍💻 Author

**Gurmita**

---
