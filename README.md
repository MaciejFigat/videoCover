##  Animated and asset heavy template


### Assets

Video by Tobias Bjørkli from Pexels

https://www.pexels.com/video/take-natur-norge-fjell-4870147/

## Installation
1. cd frontend
2. npm install
3. npm start

## Structure
```
├── backend (empty for now)
├── frontend
|   ├── node_modules
|   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── src
│   │   ├── actions (Redux)
│   │   ├── animations (different variables for Framer Motion)
│   │   ├── assets (photos, graphics etc.)
│   │   ├── components (some reusable components)
|   │   ├── constants (for action types in Redux)
|   │   ├── layout (Menu) 
|   │   ├── reducers (Redux)
|   │   ├── screens 
|   │   ├── styles
|   │   ├── App.js
|   │   ├── index.js
|   │   ├── store.js (Redux)
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
├── README.md
```

### Relevant features
<p>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat" />
<img alt="Framer-Motion" src="https://img.shields.io/badge/Framer%20Motion%20-A%20production--ready%20motion%20library%20for%20React-ff69b4" />
<img alt="React Router" src="https://img.shields.io/badge/React Router-CA4245?logo=React-router&logoColor=white&style=flat" />
<img alt="Redux" src="https://img.shields.io/badge/Redux-764ABC?logo=Redux&logoColor=white&style=flat" />
</p>


### Redux for menu, most basic setup with further development in mind.

1. constants used in action types: 
 * MENU_OPEN,
 * MENU_CLOSE.
2. actions dispatched from a component
 * openMenu,
 * closeMenu.
3. components through useSelector hook, have access to that global variable, it is then connected to changing classes and styling various elements accordingly.
  

### Styles 

