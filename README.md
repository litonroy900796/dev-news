# 📰 Dev News

Dev News is a modern news portal built using **Next.js App Router**.  
This project demonstrates advanced Next.js features including:

- Custom API Routes
- Dynamic JSON Import
- Slug-based Dynamic Routing
- Parallel & Intercepting Routes
- Modal Routing System
- PATCH & DELETE API Operations
- Multi-language Support (English & Bangla)
- Proper Error Handling
- Custom Not Found Pages

---

## 🚀 Features

### 🔹 Custom API Endpoints

#### 1️⃣ GET All News  
GET /api/news
Returns all news from `data.json`.

#### 2️⃣ GET Single News  
GET /api/news/{slug}
Returns specific news object by slug.

#### 3️⃣ PATCH News  
PATCH /api/news/{slug}
Allows updating only:
- `title`
- `description`

✅ Returns updated news object  
❌ Throws error if other fields are modified  

#### 4️⃣ DELETE News  
DELETE /api/news/{slug}
Deletes the specific news.

---

### 🔹 Dynamic JSON Import

Instead of using fetch/axios, the `data.json` file is dynamically imported and rendered directly into UI as News Cards.

---

### 🔹 Vote & Date Formatting

- 2500 → 2.5K
- Date formatted according to UI requirement

---

### 🔹 Advanced Routing

- `/news/:slug` dynamic route
- Parallel Routing
- Intercepting Routing
- Modal opens on card click
- Page reload shows standalone page
- Common Not Found page
- Single News Not Found page:
  
This News with {slug} id was not found!

---

### 🔹 Multi-language Support

Supports:

- 🇺🇸 English
- 🇧🇩 বাংলা

✔ Browser default language detection  
✔ Only hardcoded UI text translated  
✔ data.json content remains unchanged  

---

## 🛠 Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- JavaScript
- Dynamic Import
- REST API Handling

---

## 📂 Project Structure

app/
├── api/
│ ├── news/route.js
│ ├── news/[slug]/route.js
│
├── news/
│ ├── [slug]/page.js
│ ├── @modal/(..)news/[slug]/page.js
│
├── not-found.js
│
public/
├── data.json
├── en.json
├── bn.json
