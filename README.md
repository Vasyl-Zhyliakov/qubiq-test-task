##### На гітхабі обираю новий проект, далі

- git init
- git add .
- git commit -m "first commit"
- git branch -M main
- //ось тут обережно ( якщо проект не з заготовки, то set-url не потрібно)
- git remote set-url origin https://github.com/Vasyl-Zhyliakov/НАЗВА ПРОЕКТУ.git
- git push -u origin main

##### Після цього всі зміни можна додавати

- git add .
- git commit -m "Some changes"
- git push
- npm run deploy

##### Нижче чернетка для README готового проекту

# The project was created with Vite + TypeScript.

[Demo](https://vasyl-zhyliakov.github.io/Tako/)

# Technologies used

- HTML5
- CSS3
- Sass(SCSS)
- BEM methodology
- JavaScript
- Vite
- Swiper.js
- GSAP MotionPathPlugin

# Features

Responsive Design – Built with a mobile-first approach, ensuring seamless performance across various devices.

Adaptive Layout – The design dynamically adjusts to different screen sizes:

- The design < 1920px
- Desktop > 1440px
- Small desktop > 1024px
- Tablet > 768px
- Mobile > 375px

# Follow these steps to run the project locally:

- Clone the repository:
  git clone https://github.com/Vasyl-Zhyliakov/Tako.git
- Navigate to the project directory:
  cd Tako
- Install the dependencies (Make sure you have Node.js installed):
  npm install
- Start the development server:
  npm run dev
- You should see a local server link like:
  http://localhost:5173
  Open it in your browser to view the app.
