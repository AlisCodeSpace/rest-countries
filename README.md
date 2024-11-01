Country Info App

The Country Info App is a React-based web application that allows users to explore detailed information about countries worldwide. The app uses modern front-end technologies to provide a smooth and interactive experience, featuring search functionality, region-based filtering, and a detailed view of each country’s information.

Technologies Used

1. React
The core framework used to build the application’s user interface.
Manages the component-based structure, enabling reusable UI pieces.
React’s state and props allow data to be easily passed and managed between components.

2. React Router
Enables seamless client-side routing, allowing users to navigate between pages without a full-page reload.
Provides the ability to create dynamic routes, enabling detailed country pages accessible by clicking on any country card.

3. Tailwind CSS
A utility-first CSS framework that provides pre-defined classes for styling.
Helps quickly style components with a responsive design and supports light and dark themes.
The dark mode feature is managed using Tailwind’s dark mode utilities, making it easy to toggle themes across the app.

4. Axios
A promise-based HTTP client used for making API requests.
Fetches data from the REST Countries API, allowing the app to dynamically load information about countries.
Manages API calls and responses, with error handling integrated to show error messages if the data fails to load.

6. REST Countries API
An external API used to retrieve data about countries, including details such as population, region, languages, borders, and more.
Provides all necessary data to populate the app’s interface and display country-specific details on the details page.
The data is structured in a way that allows us to present both general overviews and specific attributes of each country.

7. Local Storage
Used to store selected country data temporarily to maintain state between page refreshes.
When a user selects a country, its data is saved in localStorage to prevent data loss if the page is refreshed on the details page.
The stored data is cleared when navigating back to the main page, ensuring that the app remains performant and clutter-free.

App Features

1. Home Page - Country List
The home page displays a list of countries with each country represented by a card showing the flag, name, population, region, and capital.
Users can scroll through the list to view various countries or search for a specific country.

2. Search Functionality
A search bar at the top of the home page allows users to search for countries by name.
As the user types, the list of countries filters in real-time to display only those matching the search term.
This feature helps users quickly find the country they’re interested in without having to scroll through the entire list.

3. Region-Based Filtering
Users can filter countries based on their region (e.g., Asia, Europe, Africa).
Selecting a region updates the country list to show only countries within that region, providing a more targeted browsing experience.

4. Country Details Page
Clicking on a country card navigates to a detailed view of that specific country.
This page provides comprehensive information about the country, including its full name, population, region, capital, native languages, currencies, and bordering countries.
Each bordering country is displayed as a clickable element, allowing users to quickly view details of neighboring countries.

5. Dark Mode Toggle
Users can toggle between light and dark themes, enhancing accessibility and providing a more comfortable viewing experience.
Tailwind CSS’s dark mode utilities make it easy to apply a cohesive dark theme across all elements in the app.

This project demonstrates a modern approach to building responsive, user-friendly applications with React, leveraging various tools and libraries to enhance performance, aesthetics, and usability. Each technology plays a role in making the app more efficient, maintainable, and enjoyable for users to explore detailed country information.

