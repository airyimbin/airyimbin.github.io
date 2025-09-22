# Author
Timothy Yim [Homepage Link](https://timyim.info)

# Design Document
[Document](https://docs.google.com/document/d/1ba76CVYynG0G9bcMx1ElJ_YyTti2xP4jvz5etQeO7PQ/edit?usp=sharing)

[Slides](https://docs.google.com/presentation/d/1_D4xWpsIQN9inu-WOhTAe-gnnxHDLe9mwduPyZKhwzw/edit?usp=sharing)

[Video Demo](https://youtu.be/xdxpzZtry9c)

# Class Link
Created for [CS 5610](https://johnguerra.co/classes/webDevelopment_spring_2025/). Class Professor: John Alexis Guerra Gómez

# Project Objective
This project is the development of a personal website that will act as a central hub for showcasing who I am, what I do, and what I’ve accomplished.  

The site will include:
- Basic personal information  
- Work experience and skills  

The overall goal is to create a clean, modern, and easy-to-navigate webpage that provides visitors with a clear sense of my identity, achievements, and areas of expertise.  

---

# User Stories
- **As a potential employer or recruiter**, I want to quickly see the candidate’s skills, experience, and contact information so that I can evaluate their fit for a role.  
- **As a colleague or collaborator**, I want to review the person’s past projects and skill areas so I can understand how we might work together.  

---

# User Personas
- **Recruiter Rachel**: A hiring manager or recruiter who spends little time on each site. She needs a concise overview of skills, a downloadable résumé, and quick contact links.  

---

# Screenshots

<img width="2559" height="1353" alt="Screenshot 2025-09-22 184144" src="https://github.com/user-attachments/assets/7a54fdeb-fae3-43a4-a5b4-424b2b28dc7d" />
<img width="2559" height="1352" alt="Screenshot 2025-09-22 184204" src="https://github.com/user-attachments/assets/f9264596-90b4-4bae-8178-fb55e2920280" />


# Site Map
- `/index.html`  
- `/resume.html`  

### Sections (on Home)
- **Hero/Cover** – full-bleed image with name, title, CTA buttons  
- **About Me** – short bio, photo/avatar, quick facts  
- **Skills** – categories (Languages, Frameworks, Tools)  
- **Work** – detailing work experience  
- **Contact** – email  

---

# Konami Code Easter Egg (Creative JS)
**Trigger:** Up, Up, Down, Down, Left, Right, Left, Right, B, A (keyboard sequence)  

# Gen AI Used

Generative AI was used to create the following [page](timyim.info/ai.html).
The prompt used was "In ai.html generate a bootstrap home page with similar content in index.html but complete different style and format and make it a sleek modern interactive personal webpage".
It was used using Copilot using ChatGPT-5 mini in Visual Studio Code.
It generated the ai.html page, along with the js/ai.js and css/ai.css files.

# Instructions to build
1. Install [Node.js](https://nodejs.org/en/download)
2. Run:
```
npm install --save-dev eslint eslint-config-prettier prettier globals @eslint/js jest eslint-plugin-jest eslint-plugin-prettier reload
```
3. Clone git repository:
```
git clone https://github.com/airyimbin/airyimbin.github.io.git
```
4. In airyimbin.github.io folder run Reload:
```
reload -b
```
