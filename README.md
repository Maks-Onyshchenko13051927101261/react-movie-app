# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🎬 Movies Explorer (React App)
Сучасний веб-додаток для пошуку та перегляду інформації про фільми, побудований на базі The Movie Database (TMDB) API.

🌟 Основні можливості
Каталог фільмів: Динамічний список популярних стрічок із підтримкою пагінації.

Фільтрація за жанрами: Швидкий відбір контенту за категоріями (Action, Drama, Sci-Fi тощо).

Пошук: Знаходження фільмів за назвою в реальному часі.

Детальна сторінка: Повна інформація про обраний фільм за окремим роутом.

Рейтинг: Візуалізація оцінок користувачів через компонент зірок.

🛠 Стек технологій
Core: React 18+

Routing: React Router v6

State Management: Context API / Redux Toolkit (на вибір)

Styling: CSS Modules / Tailwind CSS

API Client: Axios

🏗 Структура проєкту (Architecture)
Проєкт реалізовано за модульним принципом для легкої підтримки коду:

services/ — логіка запитів до API (Axios instance).

components/ — "дурні" компоненти (UI): StarsRating, GenreBadge, PosterPreview.

containers/ — логічні блоки: MoviesList, Header.

pages/ — повноцінні сторінки: MoviesPage та MovieDetailsPage.

hooks/ — кастомні хуки для запитів або обробки даних.

🚦 Швидкий старт
Клонування:

Bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
Встановлення залежностей:

Bash
npm install
Налаштування API Key:
Створіть .env у корені проєкту:

Code snippet
REACT_APP_TMDB_API_KEY=ваш_ключ_з_налаштувань_tmdb
Запуск:

Bash
npm start
📐 Дизайн-концепція
Додаток використовує сітковий макет (Grid Layout) для створення адаптивного інтерфейсу. Стилістика натхненна сучасними медіа-платформами з акцентом на великі постери та мінімалістичні шрифти.
