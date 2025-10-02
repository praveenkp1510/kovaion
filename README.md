
# CRM Dashboard ✨

Figma File : Figma: https://www.figma.com/design/nxeG0Hrz3xHcI6wjrfdnFk/Kovaion?node-id=126-2&t=KdewVzjbB6C5XiPr-1

A modern Customer Relationship Management (CRM) dashboard application designed with a focus on usability, clean aesthetics, and data clarity.

## 🎨 Design Concept: Glassmorphism

This application leverages the **Glassmorphism** design trend, characterized by:

* **Translucency/Transparency:** Creating a "frosted glass" effect on background elements.
* **Multi-layered Approach:** Using distinct layers of depth to separate content from the background.
* **Vivid Colors & Shadows:** Employing soft borders and subtle shadows to enhance the floating, glass-like appearance.

The design features a dark, vibrant background with translucent cards and components, ensuring key data remains legible while maintaining a high-impact visual style.-

## 🚀 Key Features

| Feature | Description | File Location |
| :--- | :--- | :--- |
| **Dashboard Overview** | Provides a summary of lead performance (New Leads, Lost, Total Close, Follow-ups) with quick visual metrics and percentage changes. | `src/pages/Dashboard.jsx` |
| **Leads Table** | A comprehensive, searchable, and paginated table component to view all lead records, including status, source, and amount. | `src/components/Table/Table.jsx` |
| **Individual Lead View** | A detailed view displaying all relevant lead information, owner, timeline, status, and address. | Viewable at the `/lead` route. |
| **Navigation** | A persistent **Sidebar** for quick access to main modules (Leads, Contacts, Accounts, Deals, etc.). | `src/components/Sidebar/Sidebar.jsx` |
| **Data Cards** | Reusable **Card** component used for displaying key metrics and information blocks across the application. | `src/components/Card/Card.jsx` |

## 💻 Tech Stack

This project is built using:

* **React:** For the front-end user interface.
* **SCSS/Sass:** For writing maintainable and modular CSS, crucial for implementing the complex visual effects of glassmorphism.

## 📂 Project Structure

The file structure is organized for scalability and component reusability:

crm-dashboard/
├── src/
│   ├── assets/        \# Images, icons, and fonts
│   ├── components/
│   │   ├── Card/
│   │   ├── Sidebar/   \# Main application navigation
│   │   ├── Table/     \# Reusable data table component
│   │   └── Topbar/    \# Header search and user info
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.scss
│   ├── App.jsx        \# Main application component & Routing
│   ├── main.jsx       \# Entry point
│   └── package.json

## ▶️ Getting Started

### Installation

1.  Clone the repository:
    ```bash
    git clone [your-repo-link]
    cd crm-dashboard
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
````

The application will typically open at `http://localhost:5173`.

### Navigation
Dashboard: /

Leads Table: /leads (or the default route defined in App.jsx)

Individual Lead View: Navigate to a specific lead's detail page using the URL structure, e.g., /lead as specified by the project requirements

  * **Dashboard:** `/`
  * **Leads Table:** `/leads` (or the default route defined in `App.jsx`)
  * **Individual Lead View:** Navigate to a specific lead's detail page using the URL structure, e.g., **`/lead`** as specified by the project requirements.
