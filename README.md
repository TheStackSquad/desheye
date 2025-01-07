# Desheye Portfolio

**Desheye** is a modern, animated portfolio application deployed on [Vercel](https://vercel.com/) and built with cutting-edge web technologies, including [Framer Motion](https://www.framer.com/motion/) for smooth UI animations.

---

## **Project Structure**

The project follows a modular structure to keep the codebase clean and maintainable:

### **Root Directory**

- **eslint.config.mjs**: ESLint configuration file to maintain code quality and consistency.
- **jsconfig.json**: Configuration file for JavaScript project settings, such as path aliases.
- **next.config.mjs**: Configuration for the Next.js framework.
- **package.json**: Specifies project dependencies, scripts, and metadata.
- **package-lock.json**: Tracks the exact versions of dependencies.
- **README.md**: Documentation for the project.
- **node_modules/**: Contains installed dependencies.
- **public/**: Stores public assets (accessible directly via URLs).
  - **file.svg**
  - **globe.svg**
  - **next.svg**
  - **vercel.svg**
  - **window.svg**

### **Source Directory (src)**

#### **src/app/**

- **asset/**: Contains project-specific assets (e.g., images, icons).
- **components/**: Reusable UI components for the application.
- **Education/**: Section dedicated to showcasing educational background.
- **globals.css**: Global styles applied throughout the application.
- **layout.js**: Defines the overall layout and structure of the application.
- **motionUtils/**: Utility functions for Framer Motion animations.
- **page.js**: Main entry point for the home page.
- **page.module.css**: CSS module for styling the home page.
- **Services/**: Section for services offered (e.g., project management, maintenance).
- **Skills/**: Section highlighting technical skills and expertise.
- **Team/**: Section showcasing team members or collaborators.

#### **src/css/**

- Contains additional CSS files for specific styles or sections of the app.

---

## **Features**

- **Smooth UI Animations**: Powered by Framer Motion for dynamic and interactive animations.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Modular Structure**: Components and sections are organized for scalability and maintainability.
- **Deployment on Vercel**: Fast and reliable hosting with seamless updates.

---

## **Getting Started**

### Prerequisites

- Node.js (>=14.x)
- npm or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheStackSquad/desheye.git
   cd desheye
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

### Starting the Production Server

```bash
npm start
```

---

## **Technologies Used**

- **Next.js**: React framework for server-side rendering and static site generation.
- **Framer Motion**: Library for animations and motion effects.
- **CSS Modules**: For scoped and maintainable CSS.
- **Vercel**: Hosting platform for fast deployment.

---

## **Deployment**

Desheye is live and accessible at: [Your Vercel Deployment URL](https://desheye.vercel.app/)

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For inquiries, feel free to reach out via [your-email@example.com](mailto:thefelainme@gmail.com).

