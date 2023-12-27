<style>
   .live-site {
      margin: 0 auto;
   }
    .img-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    .img-div img {
      width: 70%;
    }
</style>

# Homework

A web site where the students of The Bridge can upload their projects to show what they have achieved or what have left to do.

<a href="https://homework-2-0-client.onrender.com/" class="live-site">Live site</a>

<!-- <a href="https://homework-2-0-client.onrender.com/" class="live-site">Homework</a> -->

## Table of contents

- [Guide](#guide)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Overview](#overview)
  - [Description](#description)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Guide

### Prerequisites

You need to install npm. To install the latest version:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Radu-A/homework-2.0
   ```
2. Install NPM packages on the root directory
   ```sh
   npm install
   ```
3. Install NPM packages on "client" directory
   ```js
   npm install
   ```
4. Run the node server on the root directory
   ```js
   npm start
   ```
5. Run react aplication on "client" directory
   ```js
   npm start
   ```

## Overview

### Description

- Home: You can search and navigate throw the projects. If you click on the name of a directory you can see his details
- Sign un / Log in: Try to sign in usign your github account. Once you have been logged in you could visit your Dashboard and your Profile
- Dashboard: The view where you can upload, edit or delete your projects.
- Profile: The place where you can update your data.

### Screenshots

<!-- ![screenshot-mobile](./assets/screenshot-mobile.jpg) -->
<!-- ![screenshot-desktop-communit](./assets/screenshot-desktop-community.jpg)
![screenshot-desktop-dashboard](./assets/screenshot-desktop-dashboard.jpg) -->

<div style="width:100%" class="img-div">
   <img src="./assets/screenshot-mobile.jpg" alt="image">
   <img src="./assets/screenshot-desktop-community.jpg" alt="image">
   <img src="./assets/screenshot-desktop-dashboard.jpg" alt="image">
</div>

## My process

### Designed with figma

<div style="width:100%" class="img-div">
   <img src="./assets/design-dashboard.jpg" alt="image">
   <img src="./assets/design-project-details.jpg" alt="image">
</div>

### Built with

- PostgreSQL and Render
- Node Express
- Semantic HTML5 markup
- SASS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Material UI](https://mui.com/) - For styles

### Key points

Back-end

- Data model design with Entity-Relationship Diagram
- Create and deploy a PostgreSQL Data Base
- Construct the CRUD with Node and PostgreSQL
- Routing with Node and Express
- Reset the value of the input after the search
- Authentication with JWT and js-cookie

Front-end

- Build the React components structure
- Functionality with React states and lifecycle of their components
- Implement Hooks to enlarge the potential of the App
- Routing with React Router Dom
- Styles with SASS
- MUI components

### Useful resources

- [React documentation](https://es.react.dev/learn) - This is an amazing documentation that guides you to get used with the way that React works.
- [react-hook-form documentation](https://react-hook-form.com/get-started) - This documentation is also great and show you step by step how to implement this hook to your project.

## Acknowledgments

Thanks a million to my teacher Alejandro Reyes and his teacher assistances Guillermo Rubio and Javier Espinosa. I can do all this stuff because of them.