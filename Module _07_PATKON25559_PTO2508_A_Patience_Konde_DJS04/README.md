# 🎧 Advanced Podcast Browser

## 📖 Project Overview
This project is an advanced podcast browsing experience built with **React**.  
It allows users to dynamically **search, sort, filter, and paginate** a list of podcast shows.  
The goal is to provide an intuitive interface that responds to user input in real time and maintains a seamless experience throughout navigation.

This project tests your ability to:
- Manage complex UI state.
- Synchronise multiple user interactions.
- Maintain clean, scalable code.

---

## 🚀 Core Objectives

### 🔍 Search Functionality
- Flexible search that matches any part of the podcast title.
- Results update dynamically as the user types or upon submission.
- Search integrates with filters, sorts, and pagination without resetting them.

### ↕️ Sorting Options
- Sort podcasts by:
  - Newest first (last updated date).
  - Title A–Z and Z–A.
- Sorting works alongside search, filter, and pagination.

### 🎛️ Filtering
- Genre-based filtering using dropdown or multi-select input.
- Filters integrate with search, sort, and pagination.
- Selected filters persist when navigating between pages.

### 📑 Pagination
- Display podcasts in manageable chunks (pagination, load-more, or infinite scroll).
- Pagination respects active search, filter, and sort state.
- UI selections remain intact while navigating pages.

### 🔄 State Synchronisation
- Centralised state management using React state, Context API, or a state library.
- All controls (search, sort, filter, pagination) stay in sync and reflect changes immediately.

### 🧹 Code Quality & Maintainability
- JSDoc documentation for major functions and modules.
- Consistent formatting and naming conventions.
- Modular logic and reusable components.

---

## 🌐 API Endpoints
Podcast data is fetched via:
# 🎧 Advanced Podcast Browser

## 📖 Project Overview
This project is an advanced podcast browsing experience built with **React**.  
It allows users to dynamically **search, sort, filter, and paginate** a list of podcast shows.  
The goal is to provide an intuitive interface that responds to user input in real time and maintains a seamless experience throughout navigation.

This project tests your ability to:
- Manage complex UI state.
- Synchronise multiple user interactions.
- Maintain clean, scalable code.

---

## 🚀 Core Objectives

### 🔍 Search Functionality
- Flexible search that matches any part of the podcast title.
- Results update dynamically as the user types or upon submission.
- Search integrates with filters, sorts, and pagination without resetting them.

### ↕️ Sorting Options
- Sort podcasts by:
  - Newest first (last updated date).
  - Title A–Z and Z–A.
- Sorting works alongside search, filter, and pagination.

### 🎛️ Filtering
- Genre-based filtering using dropdown or multi-select input.
- Filters integrate with search, sort, and pagination.
- Selected filters persist when navigating between pages.

### 📑 Pagination
- Display podcasts in manageable chunks (pagination, load-more, or infinite scroll).
- Pagination respects active search, filter, and sort state.
- UI selections remain intact while navigating pages.

### 🔄 State Synchronisation
- Centralised state management using React state, Context API, or a state library.
- All controls (search, sort, filter, pagination) stay in sync and reflect changes immediately.

### 🧹 Code Quality & Maintainability
- JSDoc documentation for major functions and modules.
- Consistent formatting and naming conventions.
- Modular logic and reusable components.

---

## 🌐 API Endpoints
Podcast data is fetched via:


https://podcast-api.netlify.app


- Returns an array of podcast previews.
- Genres are provided as IDs only.  
- Use the `data.js` file in the repository to map genre IDs to their corresponding titles.

---

## 📂 Project Structure

srr/
components/
SearchBar.jsx
Filter.jsx
Sort.jsx
Pagination.jsx
PodcastList.jsx
context/
PodcastContext.jsx
data.js
App.jsx
main.jsx

-----

# ✅ Project Deliverables
### Fully functional React app that:

* Fetches and displays podcast data.

* Allows live searching, sorting, filtering, and pagination.

* Maintains consistent state across all UI interactions.

###Clean codebase with:

* Reusable, modular components.

* Clear formatting.

* JSDoc comments
* . 
### README.md with:

* Project overview and purpose.

* Setup and usage instructions.

* Key features explained.

---

# 📜 License
This project is licensed under the MIT License.


