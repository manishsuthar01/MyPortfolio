# Manish Suthar - Personal Portfolio

This repository contains the source code for my personal portfolio website. It is a modern, responsive, single-page application built with React, Vite, and Tailwind CSS to showcase my skills, projects, and professional experience as a frontend developer.

## Features

*   **Responsive Design:** Fully responsive layout that ensures a seamless experience on desktops, tablets, and mobile devices.
*   **Component-Based Architecture:** Built with reusable React components for easy maintenance and scalability.
*   **Comprehensive Sections:**
    *   **Hero:** A welcoming introduction with social links and a call-to-action.
    *   **Skills:** A detailed breakdown of my technical abilities with proficiency levels.
    *   **Experience:** A timeline view of my educational and professional journey.
    *   **Services:** An overview of the services I offer, including frontend development and UI/UX design.
    *   **Projects:** An interactive carousel to display my work, complete with descriptions, technologies used, and links.
    *   **Testimonials:** A sliding section featuring feedback from clients and colleagues.
    *   **Contact:** A functional contact form integrated with EmailJS for direct messaging.
*   **Utility-First Styling:** Styled with Tailwind CSS for rapid UI development and a consistent design system.
*   **Optimized Performance:** Built with Vite for a fast development experience and an optimized production build.

## Tech Stack

*   **Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React, React Icons
*   **Email Service:** EmailJS

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/manishsuthar01/myportfolio.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd myportfolio
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Configure EmailJS:**
    The contact form relies on EmailJS to send messages. You will need to create a free account at [emailjs.com](https://www.emailjs.com/) to get your own credentials.

    Open the `src/Components/Contact.jsx` file and replace the placeholder credentials with your own:

    ```javascript
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",       // Replace 'service_quwae1f'
        "YOUR_TEMPLATE_ID",      // Replace 'template_z6fk0wi'
        form.current,
        "YOUR_PUBLIC_KEY"        // Replace 'pVwbg4C3i_Qli7pti'
      )
    ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `https://myportfoli0047.netlify.app/`.

## Available Scripts

In the project directory, you can run the following scripts:

*   `npm run dev`
    Runs the app in development mode with Hot Module Replacement.

*   `npm run build`
    Builds the app for production to the `dist` folder.

*   `npm run lint`
    Lints the project files for code quality and errors.

*   `npm run preview`
    Serves the production build locally to preview the final application.
