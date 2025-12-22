# HJB Engineering Ltd. Corporate Website

This is the official corporate website for HJB Engineering Ltd., built using [Next.js](https://nextjs.org/) (App Router), React, and TypeScript. The site features a responsive design styled with [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/en/) (v18.17.0 or later is recommended for Next.js 14)
*   npm (Node Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd hjbwebsite
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the file.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm start
```

## 🛠️ Tech Stack

*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Deployment:** (TBD - e.g., Vercel, Netlify, or standard Node.js server)

## 📂 Project Structure

*   **`src/app`**: Contains the application routes and pages (Home, About, Services, Projects, Contact, Team, etc.).
*   **`src/components`**: Reusable UI components like `Header`, `Footer`, `Slideshow`, and `NavLink`.
*   **`public/`**: Static assets.
    *   **`public/data/`**: JSON files for dynamic content (e.g., `services.json`).
    *   **`public/images/`**: Images for the website, including project photos.

## 📝 Content Management

This website uses JSON files to manage dynamic content, making it easy to update without touching the code.

### Updating Services
Edit `public/data/services.json`.
*   Each service requires a `title`, `slug`, `icon` (optional/deprecated), and `description`.

### Updating Projects
Edit `public/images/Project Photos/description.json`.
*   This file contains an array of project objects.
*   **Fields:** `name`, `location`, `type`, `description`, `image` (filename), and `coordinates`.
*   **Images:** Ensure the corresponding image file exists in the correct subdirectory within `public/images/Project Photos/`.

## 🚧 Outstanding Items (Roadmap)

See `PROJECT_STATUS.md` for a detailed status report. Key pending tasks include:
*   **Mobile Navigation:** Implementation of the mobile menu overlay.
*   **Contact Form:** Backend integration for form submission.
*   **Map Interactivity:** Enhancing the embedded OpenStreetMap.
*   **Content:** Finalizing content for Team, Privacy Policy, and Terms of Service pages.

## 🤝 Contributing

1.  Create a new branch for your feature or fix.
2.  Commit your changes with clear messages.
3.  Push to the branch and submit a Pull Request.

---
*Generated on December 15, 2025*
