# Project Overview

This project was initialized with [Create React App](https://github.com/facebook/create-react-app). The project
shows the details of the characters of Rick and Morty Season using the [Rick and morty API endpoint](https://rickandmortyapi.com)

## Features

This React single-page application (SPA) showcases the characters from the Rick and Morty series with the following features:

1. **Home and Profile Pages**: The SPA consists of two main pages: Home and Profile.
2. **Character Table**: On the Home page, a table displays a list of characters retrieved from the [Rick & Morty API’s Character endpoint](https://rickandmortyapi.com/). The table includes the following columns:

   - **Avatar**: Displaying the character's image.
   - **Name**: Showing the character's name.
   - **Species**: Indicating the species of the character.
   - **Status**: Denoting the character's current status.

3. **Character Profile**: Clicking on a character's name navigates to a Profile page, where detailed information about the character is displayed. The data is dynamically fetched from the API endpoint.

4. **Back Button**: The Profile page features a Back button, allowing users to easily navigate back to the Home page and the main table of characters.

5. **Pagination**: The main table on the Home page supports pagination, enhancing usability by allowing users to navigate through different sets of character data easily.

6. **Search Functionality**: Users can quickly find characters by using the search field on the Home page. The search operates on an `onChange` event, instantly filtering the displayed rows based on the entered search string.

## Getting Started

Follow the instructions below to set up the
developement environment and run

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) with [npm](htttps://www.npmjs.com/)

### Clone the repository

Using your terminal,clone the repository to your local directory

```sh
git clone https://github.com/hamsaal/rick-and-morty
```

### Navigate to the Project Directory

Change your current directory to the project folder using the cd command:

### Install Dependencies:

Install the necessary project dependencies using npm:

```sh
npm install
```

_This command will download and install the required packages specified in the package.json file._

### Start the Development Server

To run the development server and launch the React app, execute the following command:

```s
npm start
```

_This command will start the development server and automatically open the app in your default web browser._
