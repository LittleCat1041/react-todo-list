# React To-Do List

A modern, interactive Task Management application built with **React** and **Vite**. This project demonstrates advanced state management patterns, including immutable array operations for task prioritization.

## Key Features

 - **Dynamic Task Management:** Add and delete tasks instantly using React State.
 - **Priority Control:** Custom logic to **reorder tasks (Move Up/Down)**, allowing users to prioritize their list dynamically.
 - **Responsive UI:** Clean, dark-themed interface designed with modern CSS3.
 - **Immutable State:** All array manipulations (adding, deleting, reordering) follow React's immutability principles to ensure predictable rendering.

## Technical Highlights (Code Logic)

 - **State Management:** utilized `useState` to handle the application's data flow.
 - **Array Manipulation:** Implemented logic to swap array elements for the "Move Up/Down" feature without mutating the original state directly:
    ```javascript
    // Example: Logic for moving a task up
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] =
    [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
    ```
 - **Component Structure:** Broken down into modular components for better maintainability.

## Tech Stack
 - React (Vite), CSS

## How to Run

### 1.  **Clone the Repository**
    ```bash
    git clone https://github.com/LittleCat1041/react-todo-list.git
    ```
### 2.  **Install Dependencies**
    ```bash
    cd react-todo-list
    ```
    ```bash
    npm install
    ```
### 3.  **Start the Application**
    ```bash
    npm run dev
    ```

## Screenshots

<img width="908" height="510" alt="image" src="https://github.com/user-attachments/assets/2c143b8c-6a98-43ab-9786-fb2b5417b016" />

