<h1 align="center">Cellular Matrix — Conway's Game of Life</h1>

<p align="center">
  <b>An interactive web implementation of Conway's Game of Life.</b><br>
  <sub>React + Vite + Tailwind front-end with a Node.js backend.</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License">
</p>

---

## Overview

**Cellular Matrix** is a browser-based version of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) — a zero-player cellular automaton where each cell lives or dies each generation based on its neighbours:

- A live cell with 2 or 3 live neighbours survives.
- A dead cell with exactly 3 live neighbours becomes alive.
- All other cells die or stay dead.

The project is split into a React front-end for the interactive grid and a Node.js backend.

## Project Structure

```text
├── frontend/     # React + Vite + Tailwind grid UI
└── backend/      # Node.js server
```

## Getting Started

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**Backend**
```bash
cd backend
npm install
npm start
```

## License

MIT — see [LICENSE](LICENSE).
