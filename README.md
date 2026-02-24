<<<<<<< HEAD
# RedAid 🩸

### A Life-Saving Blood Donation Platform

**Developed by:** Soham Gangopadhyay

**🌐 Live Demo:** [View Deployed Application](<INSERT_DEPLOYED_LINK_HERE>)

---

## 📖 Overview

**RedAid** is a modern, responsive web application built with **React** designed to bridge the gap between blood donors and patients in urgent need. The application provides a seamless and intuitive interface for users to find potential blood donors, filter them by specific criteria, and manage emergency requests efficiently.

This project demonstrates a robust implementation of React hooks, state management, API integration, and modern UI styling using Tailwind CSS.

---

## 🚀 Key Features

### 1. 🏠 Interactive Home Page

- **Hero Section:** Features a compelling "Donate Blood, Save Lives" message.
- **Visuals:** Includes animated blood drop effects and background overlays for an engaging user experience.
- **Navigation:** Quick access buttons to find donors or register.

### 2. 🔍 Advanced Donor Discovery

- **Real-time Data:** Fetches user data from an external API (`jsonplaceholder`) and maps it to realistic donor profiles (Indian names, major cities, and blood groups).
- **Live Availability:** Donors are categorized as "Available" or "Not Available" based on real-time status.
- **Smart Filtering:**
  - **By Blood Group:** Dropdown filter to find specific blood types (A+, O-, etc.).
  - **By City:** Search bar to locate donors in specific cities (e.g., Mumbai, Delhi, Kolkata).
- **Sorting:** Toggle button to sort donors by their availability status.
- **Reset:** One-click reset button to clear all active filters.

### 3. ❤️ Favorites & Shortlisting

- **Save Donors:** Users can mark specific donors as "Favorites" by clicking the heart icon on the donor card.
- **Persisted State:** The favorites list is managed in the main app state.
- **Navbar Counter:** A live badge on the Navbar shows the number of saved donors instantly.
- **Notifications:** Integrated `react-hot-toast` provides instant feedback (e.g., "Added to favorites ❤️").

### 4. 🚑 Request System

- **Request Help:** Users can send help requests directly from the donor card.
- **Status Tracking:** The button updates to "Request Sent ✅" and disables to prevent duplicate requests.
- **Session Tracking:** Keeps a log of requested donors during the active session.

### 5. 🎨 Modern UI/UX

- **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
- **Tailwind CSS:** Utilizes utility-first CSS for consistent spacing, typography, shadows, and rounded corners.
- **Animations:** Smooth transitions on hover, pulse effects for availability indicators, and interactive buttons.

---

## 🛠️ Tech Stack

| Technology           | Purpose                                                     |
| -------------------- | ----------------------------------------------------------- |
| **React.js**         | Core frontend library for building the user interface.      |
| **Tailwind CSS**     | Utility-first CSS framework for styling and responsiveness. |
| **React Router DOM** | Handles client-side routing (Home, Donors, Favorites).      |
| **Axios**            | HTTP client for fetching donor data from the API.           |
| **React Icons**      | Provides vector icons (Hearts, Arrows) for the UI.          |
| **React Hot Toast**  | Displays beautiful toast notifications.                     |

---

## 📂 Project Structure

```
redaid-app/
├── src/
│   ├── assets/          # Images (logo, background, drop)
│   ├── components/
│   │   ├── Navbar.jsx   # Top navigation with favorites counter
│   │   ├── Home.jsx     # Landing page with hero section
│   │   ├── Donors.jsx   # Main donor list with filters & logic
│   │   └── DonorCard.jsx # Individual card component for donor details
│   ├── App.js           # Main application wrapper and routing
│   └── index.css        # Tailwind directives and global styles
└── README.md            # Project documentation
```

---

## ⚡ Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   npm run dev
   ```
=======
# RedAid
A React app that allows users to view, filter, and request blood donors from a dataset.
>>>>>>> 1fd7098c0c7dec1f9cb242809ce4c0381bfea37d
