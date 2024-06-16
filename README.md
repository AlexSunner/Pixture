# Pixture

Pixture is a social media web application built using React. Users can post pictures, like posts, comment on posts, and follow other users. The application interacts with a Django Rest Framework (DRF) API for data management and storage.

The live link can be found here [Pixture](https://pixture-323686e333c6.herokuapp.com/)

## Important Note for iPhone Users

If you are using an iPhone with Safari to access Pixture, you may need to adjust your settings to enable cross-site tracking. This is necessary for the authentication process to work correctly.

To enable cross-site tracking:

1. Go to the **Settings** app on your iPhone.
2. Scroll down and select **Safari**.
3. Under **Privacy & Security**, turn off **Prevent Cross-Site Tracking**.

This will allow you to sign in and use Pixture without any issues.

## Table of Contents

- Features
- Installation
- Usage
- Technologies Used
- API Integration
- User Stories
- Deployment
- Forking & Cloning
- Testings
- Credits

## Features

- Sign Up Page with a success message, verifying the user has signed up successfully.
  ![Sign Up Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/signup.jpg?raw=true)

- Sign In Page with a success message, verifying the user has signed in successfully.
  ![Sign In Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/signin.jpg?raw=true)

- Sign Out function with a success message, verifying the user has signed out successfully.

![Sign Out Button](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/signout.jpg?raw=true)

- Comments Section with Edit and Delete function

![Comments](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/comments.jpg?raw=true)

- Follow and unfollow users via the Popular Profiles list or directly in a users profile page.

![Popular Profiles](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/popularprofiles.jpg?raw=true)

- Liked Feature, a page that shows what posts you have liked and displays them in a list.
  ![Likes](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/likes.jpg?raw=true)

- Profile Page, which shows the information and a avatar of the selected user. The user can click on the Three dots menu and choose to edit profile, edit username or edit password. I also customized a Show button which displays the followers when clicked on.

![Profile Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/profilethreedots.jpg?raw=true)

![Change Password](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/changepassword.jpg?raw=true)

![Change Username](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/changeusername.jpg?raw=true)

![Edit Profile](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/editprofile.jpg?raw=true)

![Followers list](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/followerslist.jpg?raw=true)

- Other users profile page.

![Other users profile pages](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/otherprofile.jpg?raw=true)

- Feed function, which shows a list of posts created by users that the logged in user is following.

![Feed Page](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/feed.jpg?raw=true)

- Responsive design for mobile and desktop

![Mockup Responsiveness](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/pixturemockup.jpg?raw=true)

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

## Technologies Used

- JavaScript
- JSX
- React
- React Router DOM
- Axios
- Bootstrap
- React Bootstrap
- JWT Decode
- React Infinite Scroll Component
- Testing Library (Jest DOM, React, User Event)
- Web Vitals
- Node.js
- NPM

## User Stories

I created a Kanban board on [GitHub](https://github.com/) in order to keep track of my user Stories and its progressions. It provides a visual representation of my tasks, making it easier to manage and prioritize them effectively with an agile approach. The kanban board can be found here - [User Stories](https://github.com/users/AlexSunner/projects/3)

### Here are some examples of these User Stories

- As a user, I can create a new account so that I can access all the features for signed up users.

  - Acceptance Criteria: The user should be able to create an account.

- As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc.

  - Acceptance Criteria: The user should be able to keep scrolling the feed without reaching a bottom.

- As a user I want to be able to search for posts with keywords, so that I can find the posts and user profiles I am most interested in.

  - Acceptance Criteria: The user should be able to use a search bar to find specific posts and users.

- As a logged in user I can add comments to a post so that I can share my thoughts about the post.
  - 1 Acceptance Criteria: The authenticated user should be able to create a comment on posts.
  - 2 Acceptance Criteria: The authenticated user who created the comment should also be able to read the comment, update the comment and delete the comment.

## Deployment

Pixture is deployed on [Heroku](https://www.heroku.com/) while the [source code](https://github.com/AlexSunner/pixture) is managed and stored on GitHub.

### Deploying to Heroku

1. Log into Heroku website.

2. From the Dashboard page, select "New" and then "Create new app."

3. Assign a name for the application, select the region and then select "Create app."

4. Select "Deploy" from the submenu at the top. Under the "Deployment method" section, select "GitHub" to connect to GitHub. Under the "Connect to GitHub" section, enter the name of the repository and select "Search." Once the repository is located, select "Connect" to connect the repository to the application within Heroku.

5. Select either "Enable Automatic Deploys" which will deploy a new version of the application every time changes are pushed to GitHub or opt for "Manual Deploy." For this application, "Automatic Deploys" was selected.

6. Once the application is deployed, scroll back to the top of the screen and select "Open app." If "Enable Automatic Deploys" has been selected, the application will be built and available after the next changes are pushed to GitHub.

### Forking the GitHub Repository

If you want to make changes to your repository without affecting it, you can make a copy of it by 'Forking' it. This ensures your original repository remains unchanged.

1. Find the relevant GitHub repository
2. In the top right corner of the page, click the Fork button (under your account)
3. Your repository has now been 'Forked' and you have a copy to work on

### Cloning the GitHub Repository

Cloning your repository will allow you to download a local version of the repository to be worked on. Cloning can also be a great way to backup your work.

1. Find the relevant GitHub repository
2. Press the arrow on the Code button
3. Copy the link that is shown in the drop-down
4. Now open Codeanywhere or whatever editor you use & select the directory location where you would like the clone created
5. In the terminal type 'git clone' & then paste the link you copied in GitHub
6. Press enter and your local clone will be created.

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
`npm install msw --save-dev`

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

This is the NavBar.test.js file:

![NavBar Test1](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/navbartest1.jpg?raw=true)

![NavBar Test2](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/navbartest2.jpg?raw=true)

This is the setupTest.js file:

![setupTest.js](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/setupTest.jpg?raw=true)

And this is the handlers.js file:

![handlers.js](https://github.com/AlexSunner/pixture/blob/main/src/assets/readme_images/handlers.jpg?raw=true)

### Running the Tests

Run your tests using the following command: `npm test`

Summary: All tests passed.

## Credits

### Moments Walkthrough Project

- This project, Pixture, is heavily reliant on the Moments walkthrough tutorial. The tutorial provided invaluable guidance and a solid foundation for building a social media web application with React and Django Rest Framework. Much of the code in this project, including the structure, components, contexts files, hooks, and API interactions, is based on or directly taken from the Moments tutorial.

### README

- The structure and a lot of content is based on my previous README.md file for the [Newsflash](https://github.com/AlexSunner/newsflash/blob/main/README.md) project.

### Acknowledgment

- I am fully aware that this project currently lacks extensive manual and automated testing. Due to time constraints and an approaching deadline, I was unable to implement these tests thoroughly. Comprehensive testing is crucial for ensuring the reliability and robustness of the application, and I plan to address this in future updates. Thank you for your understanding.
