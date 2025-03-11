# Datagrid App

This project is a simple React-based datagrid/table created using **Next.js** with TypeScript. It displays data, allows users to select rows, and enables downloading selected items if specific conditions are met.

Deployed on Vercel: [Link] https://datagrid-git-main-karishma-golanis-projects.vercel.app/

---

## Features

- Displays a table with data including `Name`, `Device`, `Path`, and `Status`.
- **Select All** checkbox with intermediate state:
  - Unchecked: None selected.
  - Checked: All selected.
  - Intermediate: Some selected.
- Displays a green dot next to the "Available" status.
- Enables the "Download Selected" button only if all selected rows have the status "Available."
- Clicking "Download Selected" shows the downloaded data in an alert box.
- Fully functional without any third-party libraries for grid/table or inputs.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript

---

## Installation and Running the App

### Prerequisites

- Node.js and npm/yarn installed on your system.
- A package manager like **npm** or **yarn**.

### Steps

```
1. npm install
   # or
   yarn install
2. npm run dev
   # or
   yarn dev
3. Open the app in your browser at http://localhost:3000.
```
