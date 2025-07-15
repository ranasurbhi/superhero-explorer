# 🌟 Superhero Explorer

A sleek and interactive Vite + React-based web application to explore Marvel superheroes! Built with modern UI elements, animations, pagination, search, and dynamic sorting to provide an immersive and engaging experience.

---

## 🚀 Features

- 🌐 **Live Search**: Filter heroes dynamically by name as you type.
- 🗃️ **Sorted Display**: Toggle between A-Z / Z-A hero sorting.
- 📆 **Pagination**: Browse results in pages (10 heroes per page).
- 💍 **Character Details**: Click any card to view full details in a responsive modal.
- ✨ **Smooth Animations**: Neon glitch loader, fade-in card effects, and responsive design.
- 🔍 **MouseGlow UI**: Custom cursor/hover effect for enhanced interactivity.

---

## 📚 Technologies Used

- **Vite + React.js** – Fast dev server and modern React framework
- **CSS Grid & Flexbox** – Layout and responsive design
- **Marvel API** – Data fetching
- **Custom CSS Animations** – Glitch effects, fade-in, hover zoom

---

## 🛌 Folder Structure

```
src/
├── components/
│   ├── CharacterCard.jsx
│   ├── CharacterGrid.jsx
│   ├── Loader.jsx
│   ├── Modal.jsx
│   ├── MouseGlow.jsx
│   ├── NavBar.jsx
│   ├── Pagination.jsx
│   ├── SearchBar.jsx
│   └── SortDropdown.jsx
├── api/
│   └── marvel.js
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx
```

---

## 📆 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ranasurbhi/superhero-explorer
cd superhero-explorer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Marvel API Key
Create a `.env` file in the root:
```env
VITE_MARVEL_PUBLIC_KEY=your_public_key
```

### 4. Run the App (Vite)
```bash
npm run dev
```
Open `http://localhost:5173` (or the port Vite assigns) in your browser.

---

## 🔍 Screenshots

| Home Page | Search + Grid |
|-----------|----------------|
| ![Home](screenshots/home.png) | ![Search](screenshots/search.png) |

| Modal | Glitch Loader |
|-----------|----------------|
| ![Modal](screenshots/modal.png) | ![Loader](screenshots/loader.png) |

---

## 📊 Improvements You Can Add

- 🔹 Theme toggling (light/dark)
- 🔹 Filter by comics/series/events
- 🔹 Favorites list using local storage
- 🔹 Lazy loading images

---

