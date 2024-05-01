<div align="center">
  <h3 align="center"><a href="https://teera.dev/" target="_blank"><b>My Developer Portfolio</b></a></h3>

  <div align="center">
    Inspired by <a href="https://www.edwardh.io/" target="_blank"><b>Ed Hinrichsen</b></a>.
  </div>
  <br>
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=e06060" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=f7b6b6" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=fadadd" alt="tailwindcss" />
  </div>
  <br />
    <img src="./src/assets/projects/portfolio.gif" alt="Project Banner">
  <br />
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Links](#links)

## <a name="introduction">🤖 Introduction</a>

This repository contains the code needed to run the application _locally_.

## <a name="tech-stack">⚙️ Tech Stack</a>

<div style="text-decoration: underline dotted;">
  - <a href="https://react.dev/" target="_blank" id="tech1"><b>React.js</b></a>
  <br>
  - <a href="https://tailwindcss.com/" target="_blank" id="tech2"><b>TailWindCSS</b></a>
  <br>
  - <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" id="tech3"><b>React Three Fiber</b></a>
  <br>
  - <a href="https://github.com/pmndrs/drei" target="_blank" id="tech4"><b>React Three Drei</b></a>
  <br>
  - <a href="https://threejs.org/" target="_blank" id="tech5"><b>Three.js</b></a>
  <br>
  - <a href="https://www.emailjs.com/" target="_blank" id="tech6"><b>Email JS</b></a>
  <br>
  - <a href="https://vitejs.dev/" target="_blank" id="tech7"><b>Vite</b></a>
</div>

## <a name="features">🔋 Features</a>

- Code is scalable and reusable
- Easy to modify to add or update certain components

## <a name="quick-start">🤸 Quick Start</a>

To set up the application locally on your machine...

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone {https/ssh url here}
```

Navigate to the cloned project's folder:

```bash
cd project_3D_developer_portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

If you encounter dependecy errors, it is most likely due to the react modules version being too new since some of
the modules require older dependecies. Try:

```bash
npm install --legacy-peer-deps
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_ID_placeholder
VITE_APP_EMAILJS_TEMPLATE_ID=template_ID_placeholder
VITE_APP_EMAILJS_PUBLIC_KEY=public_key_placeholder
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

<br>

Watch this [YouTube tutorial](https://www.youtube.com/watch?v=NgWGllOjkbs) to understand how to create an account and template.

<h2>
  <span style="color: orange;">Your Service ID:</span>
  <img src="https://i.imgur.com/7XZgp2b.png"/>
  <br>
  <span style="color: orange;">Your Template ID:</span>
  <img src="https://i.imgur.com/7XZgp2b.png"/>
  <br>
  <span style="color: orange;">Your Public Key:</span>
  <img src="https://i.imgur.com/RbM4d1I.png/"/>
</h2>

**Running the Project in the Terminal**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="links">🔗 Links</a>

Models and assets used in the project can be found in:

```diff
./src/assets
./public
```

<div align="center">
  <br />
    <h2> 
      Enjoy!
    <h2/>
    <img src="https://i.imgur.com/OA8orNR.gif" alt="Enjoy Animation">
  <br />
<div/>
