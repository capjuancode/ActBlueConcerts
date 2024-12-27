
![project actblue](https://github.com/user-attachments/assets/ac0d1f53-62fc-493e-a85d-14017ace6def)


# Project: Event Ticketing System

## Description
This project demonstrates a ticketing system with a Rails backend and a React frontend. The system is designed to showcase capabilities in both Rails and React development. The following features are implemented:

- A Rails project serves event data stored in a MySQL database via a seed file.
- An index page styled with a simple CodePen template for added visual flair.
- A dynamic React component renders ticket forms based on the number of ticket versions available, including required fields (excluding advanced credit card validation).

While not all optional features (e.g., Jest tests or database-saving functionality) were implemented due to time constraints, the focus was on creating a functional ticketing form.

## Technologies Used
- **React**
- **Vite**
- **Inertia.js** ([Inertia.js for Rails](https://github.com/inertiajs/inertia-rails))
- **Vite Rails** ([Vite Rails Gem](https://github.com/sergii/vite_rails))

## How to Start the Project
1. Clone the repository.
2. Install Ruby dependencies:
    ```bash
    bundle install
    ```
3. Install JavaScript dependencies:
    ```bash
    npm install
    ```
4. Set up the database:
    ```bash
    rails db:create db:migrate db:seed
    ```
5. Start the Rails server:
    ```bash
    rails s
    ```
6. Start the Vite development server:
    ```bash
    bin/vite dev
    ```

## Notes
While I am not a React developer by trade, I am pleased with the results and confident that, with more practice, I can further refine my skills in this area.
