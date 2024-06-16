# Pixture

Pixture is a social media web application similar to Instagram, built using React. Users can post pictures, like posts, comment on posts, and follow other users. The application interacts with a Django Rest Framework (DRF) API for data management and storage.

The live link can be found here [Pixture](https://pixture-323686e333c6.herokuapp.com/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Features

- Sign Up Page with a success message, verifying the user has signed up successfully.
![Sign Up Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/signup.jpg?raw=true)

- Sign In Page with a success message, verifying the user has signed in successfully.
![Sign In Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/signin.jpg?raw=true)
- Sign Out function with a success message, verifying the user has signed out successfully.

![Sign Out Button](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/signout.jpg?raw=true)
- Comments Section

![Comments](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/comments.jpg?raw=true)
- Follow and unfollow users via the Popular Profiles list or directly in a users profile page.

![Popular Profiles](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/popularprofiles.jpg?raw=true)

- Liked Feature, a page that shows what posts you have liked and displays them in a list.
![Likes](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/likes.jpg?raw=true)

- Profile Page, which shows the information and a avatar of the selected user. The user can click on the Three dots menu and choose to edit profile, edit username or edit password. I also added a Show button which displays the followers when clicked on.

![Profile Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/profilethreedots.jpg?raw=true)

![Followers list](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/followerslist.jpg?raw=true)

- Responsive design for mobile and desktop


## Installation

1. Clone the repository:

   ```
   git clone https://github.com/AlexSunner/pixture.git
   cd pixture

   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Usage
- To use the application, navigate to the URL where the development server is running (typically http://localhost:3000). From there, you can sign up or log in to start posting pictures, liking posts, commenting, and following other users.
- The deployed version can be found here - [Pixture](https://pixture-323686e333c6.herokuapp.com/)

## API Integration
- Pixture interacts with a Django Rest Framework (DRF) API to manage and store data. The API provides endpoints for user authentication, profiles, posts, likes, comments, and followers. All data fetching and sending operations are performed using Axios.
Link to the deployed API can be found here - [Pixture API](https://pixture-drf-2d68c7f0119f.herokuapp.com/)

## Contributing
- Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the project's coding style and include appropriate documentation.

## Manual Testings
- Homepage
    - Manually verified that the homepage loads correctly without any errors.
    - Ensured that the posts are displayed on the homepage as expected.
    - Clicked on different posts to ensure they open correctly and displays the content accurately.

- User Authentication
    - Manually tested the user authentication functionality by attempting to log in with valid credentials.
    - Verified that the login form validates user input and displays appropriate error messages for incorrect credentials.
    - After successful login, verified that the user is redirected to the homepage.
    - Manually tested the logout functionality by clicking on the logout button and verifying that the user is logged out of the website.

- User Registration
    - Manually tested the user registration functionality by attempting to register a new account.
    - Filled out the registration form with valid user details and verified that the form submits successfully.
    - Checked for validation errors when providing invalid or incomplete information.
    - After successful registration, attempted to log in using the newly created account to ensure it works as expected.

- Commenting and Liking on Posts
    - Manually navigated to individual posts and verified that users can leave comments.
    - Tested the comment submission form by entering valid comment text and ensuring it is posted successfully.
    - Checked for validation errors when attempting to submit empty comments.
    - Verified that comments are displayed correctly under the respective posts.
    - Verified that the `comment count` was increased by 1 when submitting a comment.
    - Verified that the `Likes count` was increased by 1 when pressing the like button, and decreased by 1 when pressing it again.

- Responsive Design
    - Manually tested the responsiveness of the application by accessing it from different devices and screen sizes.
    - Verified that the layout and content adapt properly to different screen resolutions, including desktop, tablets and mobile devices.

- Navigation Bar
    - Manually tested the navigation links to ensure they lead to the correct pages.
    - Checked that the navigation menu is accessible and user-friendly on both desktop and mobile devices.

- Admin Panel
    - Manually accessed the Django Admin Panel and verified that administrators can add, edit and delete categories, posts, users, collaboration requests, and contact page content.
    - Manually tested the functionality of different admin panel features.


### This section provides a guide for setting up and performing manual testing using MSW (Mock Service Worker) and Jest. The focus is on the NavBar component, ensuring it behaves correctly under different user states.

### Setup

Ensure MSW is installed as a development dependency with the command:
`    npm install msw --save-dev
   `

Define the API handlers in `mocks/handlers.js`

Configure the MSW server in `setupTests.js`

### Explanation of Tests

Description: Ensures the NavBar component renders correctly for a logged-out user.
Assertions: Verifies the presence of the "Sign in" link.
renders link to the user profile for a logged in user

Description: Ensures the NavBar displays the correct user profile link for a logged-in user.
Assertions: Verifies the presence of the username "Sune" in the navigation bar.
renders Sign in and Sign up buttons again on log out

Description: Ensures the NavBar updates correctly when a user logs out.
Assertions: Simulates a click on the "Sign out" link and verifies the presence of both "Sign in" and "Sign up" links, confirming the user has logged out.

![NavbBar Test1](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/navbartest1.jpg?raw=true)

![NavBar Test2](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/navbartest2.jpg?raw=true)

![setup test](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/setupTest.jpg?raw=true)


### Running the Tests

Run your tests using the following command: `npm test`
