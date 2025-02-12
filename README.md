# Registration App

A simple and efficient application designed for user registration. This app provides a multi-step form where users can provide their details, validate their phone numbers, and complete the registration process. The goal of this application is to provide a smooth and user-friendly registration experience.

## Features
- Multi-step registration flow
- Phone number validation
- Step navigation (Back and Next buttons)
- Responsive design with styled inputs

## Tech Stack
- **Frontend:** 
  - React (with hooks and Zustand for state management)
  - Next.js (for routing and SSR support)
  - Tailwind CSS (for responsive design and utility-first CSS)
  - Zod (for validation schemas)
  - React Hook Form (for form handling)
  - React Phone Number Input (for phone input)
  
- **Styling:** 
  - Tailwind CSS

- **State Management:** 
  - Zustand (for global state management)

## Installation

Follow these steps to set up and run the application locally:

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (or **yarn**)

### Steps to Start the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/registration-app.git
   cd registration-app

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install

3. Run the application:

   ```bash
   npm install
   # or
   yarn install


### Explanation of New Sections:
1. **Installation and Setup**:
   - Instructions on how to clone the repository, install dependencies, and run the app locally.
   - Includes setting up environment variables (`.env.local`) if necessary.
   
2. **Project Structure**:
   /registration-app
            ├── /components          # Reusable UI components
            ├── /core                # Core components like Input, Button, etc.
            ├── /pages               # Next.js pages
            ├── /store               # Zustand store for global state management
            ├── /styles              # Tailwind CSS styles
            ├── /utils               # Utility functions and helpers
            ├── /public              # Static assets like images and fonts
            ├── package.json         # Project dependencies and scripts
            └── README.md  

3. **How It Works**:
   - A short description of the registration flow, including what happens in each step.

5. **License**:
   - The project is open-source and uses the MIT License.

With this complete README, anyone who clones or contributes to the repository will have clear instructions on how to get started with the project.
