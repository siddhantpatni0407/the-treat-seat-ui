# The Treat Seat UI

A **responsive, modern React landing page** for *The Treat Seat*, a platform for ordering delicious treats. The site uses **React**, **Bootstrap 5**, and custom styling for a professional look, including a navbar, hero header, feature cards, and footer.

---

## **Features**

* Responsive **navbar** with logo and hamburger menu for mobile devices
* Hero **header section** with gradient background, call-to-action buttons, and responsive typography
* **Feature cards** highlighting key services: Freshly Baked, Seasonal Specials, Online Ordering
* Clean and simple **footer** with copyright
* Fully **responsive** across mobile, tablet, and desktop
* Smooth hover effects for buttons and feature cards

---

## **Tech Stack**

* **React** (v18+)
* **Bootstrap 5**
* **CSS3 / Flexbox / Grid**
* **Vite / CRA** (for React development)

---

## **Folder Structure**

```
the-treat-seat-ui/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── the-treat-seat-logo.png
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/mkhalegaonkar3/the-treat-seat-ui.git
cd the-treat-seat-ui
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm start
```

> The app will run on `http://localhost:3000` by default.

---

## **Bootstrap Integration**

* Bootstrap CSS is imported in `index.js`:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

* Used Bootstrap classes for:

  * Navbar (`navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-danger`)
  * Buttons (`btn`, `btn-lg`, `btn-light`, `btn-outline-light`)
  * Grid (`Container`, `Row`, `Col`)

* Custom CSS is used for:

  * Gradient background in header
  * Card hover effects
  * Rounded buttons and shadow effects

---

## **Available Scripts**

* `npm start` – Runs the app in development mode
* `npm run build` – Builds the app for production
* `npm test` – Runs tests (if implemented)
* `npm run eject` – Eject CRA configuration (use with caution)

---

## **License**

This project is **MIT Licensed** – free to use and modify.

---
