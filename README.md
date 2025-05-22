# Portfolio Frontend

This is the **React frontend** for my Portfolio project. It allows users to view my portfolio, switch languages, and authenticate to create new projects.

## 🌐 Tech Stack

- React
- React Router
- i18next (Internationalization)
- Axios
- Playwright (for end-to-end testing)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Backend server running on `http://localhost:8080`

### Installation

cd frontend
npm install

### Running the app

npm run dev

### 🔐 Authentication
Authentication is handled via form login. Authenticated users can access the /create page to add projects.

### 🖼️ Images
Images are served from the backend at /uploads/* and should load directly in the browser.

### 💬 Translations
The UI supports multiple languages (currently English, French, and Spanish). Use the toggle button in the navbar to switch languages.

### 📄 License
MIT
