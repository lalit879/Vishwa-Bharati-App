Vishwa Bharati Shiksha Sadan - School Website
This is the official website for Vishwa Bharati Shiksha Sadan, a modern, responsive web application designed to provide comprehensive information about the school to students, parents, and visitors. The project is built with a modern tech stack including React, Vite, and Tailwind CSS to ensure a fast, efficient, and visually appealing user experience.

📋 Table of Contents
✨ Features

🛠️ Tech Stack

🚀 Getting Started

Prerequisites

Installation

📜 Available Scripts

📁 Project Structure

🔮 Future Improvements

✨ Features
Modern & Responsive Design: Fully responsive layout that looks great on all devices, from mobile phones to desktops.

Component-Based Architecture: Built with reusable React components for maintainability and scalability.

Interactive UI: Engaging user interface with hover effects, animations, and a clean design.

Detailed Information: Provides key information about the school, including:

Contact and location details.

School history and mission.

Statistical data on students, staff, and facilities.

Fast & Optimized: Built with Vite for a lightning-fast development experience and an optimized production build.

🛠️ Tech Stack
This project is built using a modern set of web technologies:

Frontend Framework: React 19

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

Icons: Font Awesome & Material-UI Icons

Linting: ESLint

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js (version 14 or higher) and npm installed on your machine.

Installation
Clone the repository:

git clone https://github.com/your-username/vishwa-bharati-app.git
cd vishwa-bharati-app

Install NPM packages:

npm install

📜 Available Scripts
In the project directory, you can run the following commands:

npm run dev
Runs the app in development mode. Open http://localhost:5173 (or the port shown in your terminal) to view it in the browser. The page will reload if you make edits.

npm run build
Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm run lint
Runs the ESLint linter to check for code quality and style issues in the project files.

npm run preview
Serves the production build from the dist folder locally. This is a good way to check the final build before deploying.

📁 Project Structure
The project follows a standard React application structure:

vishwa-bharati-app/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, logos, etc.
│   ├── components/       # Reusable React components
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HomeContent.jsx
│   │   ├── InfoCard.jsx
│   │   ├── InfoGrid.jsx
│   │   ├── LeftPanel.jsx
│   │   └── SchoolInfo.jsx
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles and Tailwind directives
│   └── main.jsx          # Main entry point of the application
├── .gitignore            # Files to be ignored by Git
├── index.html            # The HTML template
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration

🔮 Future Improvements
This project has a solid foundation, but there are several areas for future improvement:

Implement Full Routing: Make all navigation links in the Header and Footer functional using React Router to navigate between different sections or pages.

Activate Interactive Elements: Add functionality to the image slider in the Header.

Dynamic Data Management:

Move hardcoded data from components into a separate JSON file or a configuration object.

For a larger-scale application, fetch data from a backend API or a Headless CMS.

Content Consistency:

Ensure all text is in a consistent language (e.g., English).

Replace all placeholder data with real information.

Accessibility (a11y): Conduct an accessibility audit to ensure the website is usable by people with disabilities.

Add More Pages: Expand the website with dedicated pages for:

Admissions

Faculty & Staff profiles

News & Events

Image Gallery