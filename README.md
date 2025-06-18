# React + Vite
# RadanOr Bikes - Premium E-commerce Frontend

This repository contains the source code for the RadanOr Bikes e-commerce frontend, a modern, fully interactive, and feature-rich single-page application (SPA) built with React. The project simulates a complete online shopping experience for a premium bicycle brand, from browsing products to a persistent shopping cart and user authentication, all powered by Firebase on the backend.

---

### Key Features

**1. Immersive User Experience & Animations:**
* **Animated Application Loader:** A custom, GSAP-powered loading sequence with a dynamic number counter and logo reveal, ensuring a unique first-time user experience.
* **Cinematic Hero Section:** The homepage features a dynamic hero section with an animated background image and text, designed to immediately capture user attention.
* **Interactive Product Slider:** A full-screen, scroll-driven product slider that showcases featured categories with complex GSAP animations for background images, product photos, and text elements.

**2. Multi-Level Product Navigation:**
* **Dynamic Navbar:** Features a "Bikes" dropdown menu that is dynamically populated based on the available product categories from the data source.
* **Category Pages:** A clean, grid-based `/all-bikes` page and dynamically generated category-specific pages (e.g., `/bikes/gravel`) that filter and display relevant products.
* **Detailed Product Page:** A comprehensive product detail page (`/bike/:id`) with an image gallery, size selector, full product description, key features, and detailed specifications.

**3. Frontend-Only E-commerce System:**
* **Fully Functional Shopping Cart:**
    * Users can add products to the cart from the product detail page.
    * The cart state is managed globally using **React Context** (`CartContext`).
    * **Cart Persistence:** The cart's contents are saved to **Firebase Firestore** for logged-in users and to **`localStorage`** for guest users, ensuring that items are not lost after refreshing or closing the browser.
    * **Cart Management:** On the dedicated `/cart` page, users can change item quantities, remove individual items, or clear the entire cart.
* **Complete Checkout Flow:** A seamless process from the cart to a checkout page (`/checkout`) with address and payment forms, culminating in an order success page (`/order-success`).

**4. User Authentication (Firebase):**
* **Real User Accounts:** A full-featured login and registration system powered by **Firebase Authentication**.
* **Profile Management:** After logging in, users are redirected to a dedicated `/account` page where they can view their details, manage their shipping address, and change their password. All user data is securely stored in **Firestore**.
* **Dynamic UI:** The navbar intelligently updates to show a personalized greeting and a "Logout" button for authenticated users, or a "Login" icon for guests.

**5. Internationalization (i18n):**
* **Multi-Language Support:** The application is fully configured for internationalization using **`i18next`** and **`react-i18next`**.
* **Dynamic Translation Loading:** Language files (`.json`) are loaded asynchronously from the `/public` folder, optimizing performance.
* **Interactive Language Switcher:** A component in the navbar allows users to instantly switch between supported languages (e.g., English and German) across the entire application.

---

### Technology Stack

* **Framework**: **React 18+** (with Hooks: `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`, `useContext`).
* **Build Tool**: **Vite**.
* **Routing**: **React Router DOM**.
* **Styling**: **Styled-components** (CSS-in-JS).
* **Animations**: **GSAP (GreenSock Animation Platform)**
    * `ScrollTrigger` for scroll-based animations.
* **Backend & Database**: **Firebase**
    * **Firebase Authentication** for user management.
    * **Firestore Database** for storing user data, orders, and messages.
* **Internationalization (i18n)**: **i18next** with `react-i18next`.

---

### Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git)
    cd YOUR-REPOSITORY-NAME
    ```

2.  **Install dependencies:**
    This command will install all the necessary packages from `package.json`.
    ```bash
    npm install
    ```

3.  **Set up your Firebase configuration:**
    * Create a `firebase.js` file in the `src/` directory.
    * Paste your Firebase project configuration into this file. You can get this from your Firebase project settings in the console.
    ```javascript
    // src/firebase.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      // ...and so on
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```



