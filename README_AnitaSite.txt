
# AnitaSite

AnitaSite is a Vue 3 project created as part of a 1st-year project at Deakin University. This website template is built using the Vite build tool and includes multiple components and views to showcase different pages such as Home, About, Services, Pricing, and more.

## Project Overview

This project includes:
- A responsive, multi-page site developed with Vue 3.
- Components such as a **Navbar**, **Footer**, and **VideoPlayer**.
- Views for key pages like **Home**, **About**, **Services**, and **Pricing**.
- Static assets such as images and videos, included in the `web/` and `public/` directories.
- A development environment powered by Vite, with hot-reload for efficient development.

## Technologies Used

- **Vue.js 3**: A progressive JavaScript framework for building user interfaces.
- **Vite**: A fast, modern development build tool.
- **JavaScript**: For dynamic behavior and functionality.
- **HTML5 & CSS3**: For markup and styling.
- **Responsive Design**: Ensuring the site works well on both desktop and mobile devices.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
  - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Project Structure

```
AnitaSite/
├── public/                   # Public assets
├── src/                      # Source code
│   ├── assets/               # Stylesheets and static assets
│   ├── components/           # Reusable Vue components
│   │   ├── navbar.vue        # Navbar component
│   │   ├── VideoPlayer.vue   # Video Player component
│   │   └── footer.vue        # Footer component
│   ├── views/                # Views for different routes/pages
│   │   ├── Home.vue          # Home page view
│   │   ├── About.vue         # About page view
│   │   ├── services.vue      # Services page view
│   │   ├── pricing.vue       # Pricing page view
│   │   ├── contact.vue       # Contact page view
│   │   └── faq.vue           # FAQ page view
│   └── router/               # Vue Router configuration
│   └── main.js               # Main entry point for the application
├── package.json              # Project metadata and dependencies
├── vite.config.js            # Vite configuration
├── README.md                 # Project documentation
└── .gitignore                # Git ignore file
```

## Project Setup

To run this project on your local machine:

### 1. Install Dependencies

Make sure you have Node.js installed, then run:

```sh
npm install
```

### 2. Compile and Hot-Reload for Development

Run the following command to start a local development server with hot-reload:

```sh
npm run dev
```

You can access the site by opening `http://localhost:5173/` in your browser.

### 3. Compile and Minify for Production

To build the app for production and create optimized files, run:

```sh
npm run build
```

The production-ready files will be in the `dist/` folder.

### 4. Preview the Production Build

After building for production, you can preview the app locally by running:

```sh
npm run preview
```

## Customize Configuration

Refer to the [Vite Configuration Reference](https://vitejs.dev/config/) for more details on how to customize the Vite configuration.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
