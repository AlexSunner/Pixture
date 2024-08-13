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

- Design Process
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

## Design Process Documentation

### 1. Project Overview

The goal of this project is to create a social media application where users can create posts, follow other users, and interact with content. The primary objective of the design was to create an intuitive and visually appealing interface that enhances user engagement and facilitates straightforward navigation.

### 2. Research and Inspiration

To inform the design, I conducted a review of similar social media platforms and gathered user feedback on desired features. Users preferred a clean layout with easily accessible features. This insight guided my design approach to ensure the application meets user expectations and stands out from competitors.

### 3. Wireframes

Here are wireframes I created for the Homepage, the create a post page and profile page.


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

## Manual Testing

### Homepage

- **Step 1**: Open the browser and navigate to the homepage.
  - **Expected Result**: The homepage should load without any errors. The layout should be displayed as intended, with no broken elements or missing content.
- **Step 2**: Verify that all posts are displayed on the homepage, including titles, images, and content.
  - **Expected Result**: All posts should be visible, and clicking on a post should open it in a new page.
- **Step 3**: Click on different posts to ensure they open correctly and display the content accurately.
  - **Expected Result**: The selected post should open without errors, displaying the full content including text, images, and other media.

### User Authentication

- **Login with Valid Credentials**:
  - **Step 1**: Navigate to the login page.
  - **Step 2**: Enter valid credentials (e.g., `testuser` and `password123`) and click "Login."
    - **Expected Result**: The user should be redirected to the homepage, and a success message should be displayed.
- **Login with Invalid Credentials**:
  - **Step 1**: Enter incorrect credentials (e.g., `testuser` and `wrongpassword`).
    - **Expected Result**: An error message should appear, indicating incorrect login details.
- **Logout Functionality**:
  - **Step 1**: After logging in, click the "Logout" button in the navigation bar.
    - **Expected Result**: The user should be logged out, redirected to the homepage, and see the "Login" option in the navigation bar.

### User Registration

- **Step 1**: Navigate to the registration page.
- **Step 2**: Fill out the registration form with valid details and submit.
  - **Expected Result**: The form should submit successfully, and a confirmation message should be displayed.
- **Step 3**: Log in using the newly created account.
  - **Expected Result**: The login should be successful, and the user should be redirected to the homepage.
- **Invalid Registration**:
  - **Step 1**: Try to submit the form with incomplete or invalid data.
    - **Expected Result**: The form should display appropriate error messages and prevent submission.

### Commenting and Liking on Posts

- **Commenting**:
  - **Step 1**: Navigate to a specific post and scroll down to the comment section.
  - **Step 2**: Enter a valid comment and click "Submit."
    - **Expected Result**: The comment should be posted successfully, and the comment count should increase by 1.
  - **Invalid Comment**:
    - **Step 1**: Try to submit an empty comment.
      - **Expected Result**: The system should prevent submission, not letting the post button be clickable.
- **Liking**:
  - **Step 1**: Click the "Like" button on a post.
    - **Expected Result**: The like count should increase by 1.
  - **Step 2**: Click the "Like" button again.
    - **Expected Result**: The like count should decrease by 1.

### Creating a Post as a Logged-In User

#### Creating a New Post

- **Step 1**: Log in to your account and navigate to the "+" icon that says Add Post.
- **Step 2**: Enter the post title and content.
- **Step 3**: Upload an image.
- **Step 4**: Click the "Create" button to submit the post.
  - **Expected Result**: The post should be created successfully, and a confirmation message (e.g., "Post created successfully") should be displayed.
- **Step 5**: Navigate to the homepage or your profile page to verify that the post is visible and correctly formatted.
  - **Expected Result**: The post should appear in the appropriate section, with the correct image, title and content displayed.

#### Invalid Post Creation

- **Step 1**: Try to submit the post without filling in all required fields (e.g., leave the title or content empty).
  - **Expected Result**: The system should prevent the submission and display an error message indicating the missing fields.
- **Step 2**: Attempt to upload an unsupported media file or exceed the size limit.
  - **Expected Result**: The system should display an error message indicating the issue with the media file.

### Editing and Deleting a Post as a Logged-In User

#### Editing a Post

- **Step 1**: Navigate to the post you just created and locate the "Edit" button.
- **Step 2**: Click "Edit" to open the post in edit mode.
- **Step 3**: Modify the post content, title, or image.
- **Step 4**: Click "Save" to submit the changes.
  - **Expected Result**: The post should be updated successfully.
- **Step 5**: Refresh the post page to ensure the changes persist after a page reload.
  - **Expected Result**: The post should display the updated content, title, and any other modifications.

#### Invalid Post Edit

- **Step 1**: Attempt to edit the post by removing required content (e.g., delete the title or content).
  - **Expected Result**: The system should prevent the submission and display an error message indicating the missing fields.

#### Deleting a Post

- **Step 1**: Navigate to the post you want to delete and locate the "Delete" button.
- **Step 2**: Click "Delete" and confirm the deletion in the subsequent modal.
  - **Expected Result**: The post should be deleted successfully.
- **Step 3**: Navigate to the homepage or your profile page to ensure the post is no longer visible.
  - **Expected Result**: The post should be completely removed from the site, and no traces of it should remain.

### Following and Unfollowing Other Profiles

#### Following a Profile

- **Step 1**: Log in to your account and navigate to another user's profile page.
- **Step 2**: Locate the "Follow" button on their profile page.
- **Step 3**: Click the "Follow" button.
  - **Expected Result**: The "Follow" button should change to "Unfollow,". The followers count for the profile should increase by 1.
- **Step 4**: Click the "Show" button and verify that your username appears in the "Followers" list.
  - **Expected Result**: Your username should be listed under the "Followers" section.
- **Step 5**: Log out and log back in to ensure that the following status persists after a session ends.
  - **Expected Result**: The user should still be followed, and their profile should still display the "Unfollow" button.

#### Unfollowing a Profile

- **Step 1**: Navigate to the profile of a user you are currently following.
- **Step 2**: Locate the "Unfollow" button on their profile page.
- **Step 3**: Click the "Unfollow" button.
  - **Expected Result**: The "Unfollow" button should change back to "Follow,". The follower count for the profile should decrease by 1.
- **Step 4**: Click the "Show" button and verify that your username no longer appears in their "Followers" list.
  - **Expected Result**: The user should be removed from the "Following" section of your profile.
- **Step 5**: Log out and log back in to ensure that the unfollow status persists after a session ends.
  - **Expected Result**: The user should no longer be followed, and their profile should display the "Follow" button.

### Responsive Design

- **Desktop Testing**:
  - **Step 1**: Open the application on a desktop browser and resize the window to various widths.
    - **Expected Result**: The layout should adjust smoothly without any content overlapping or breaking.
- **Tablet and Mobile Testing**:
  - **Step 1**: Access the application on a tablet and mobile device.
    - **Expected Result**: The layout should be responsive, with elements such as the navigation bar adapting to the screen size (collapsing into a hamburger menu on mobile).
  - **Step 2**: Test touch interactions like clicking buttons and scrolling.
    - **Expected Result**: The app should be fully functional on all device types.

### Navigation Bar

- **Desktop Navigation**:
  - **Step 1**: Click each link in the navigation bar to ensure it redirects to the correct page (e.g., "Home," "Feed," "Liked").
    - **Expected Result**: Each link should work correctly, with no broken links or incorrect redirects.
- **Mobile Navigation**:
  - **Step 1**: Open the application on a mobile device and test the navigation bar functionality (expanding/collapsing the hamburger menu).
    - **Expected Result**: The navigation should be user-friendly, with all links accessible and functional on mobile.

### Admin Panel

- **Accessing the Admin Panel**:
  - **Step 1**: Log in as an admin and navigate to the admin panel.
    - **Expected Result**: The admin dashboard should be accessible, displaying all administrative options.
- **CRUD Operations**:
  - **Step 1**: Test creating, editing, and deleting posts, users, and other content types.
    - **Expected Result**: Each action should work as expected, with changes reflected immediately in the application.
- **Edge Cases**:
  - **Step 1**: Attempt to delete a user that is associated with multiple posts.
    - **Expected Result**: The system should handle the deletion appropriately, deleting everything associated with that specific user.

### Profile Page

#### Editing Bio

- **Step 1**: Log in and navigate to your profile page.
- **Step 2**: Click the "Edit" button.
- **Step 3**: Click the "edit profile" button.
- **Step 4**: Enter a new bio text (e.g., "This is my updated bio.") and click "Save."
  - **Expected Result**: The bio should be updated with the new text, and a confirmation message (e.g., "Bio updated successfully") should be displayed.
- **Step 5**: Refresh the profile page to ensure the bio persists after a page reload.
  - **Expected Result**: The new bio should still be displayed after the page reloads.

#### Changing Username

- **Step 1**: Log in and navigate to your profile page.
- **Step 2**: Click the "Edit" button.
- **Step 3**: Click the "change username" button.
- **Step 4**: Enter a new username (e.g., `newusername123`) and click "Save."
  - **Expected Result**: The username should be updated, and a confirmation message (e.g., "Username updated successfully") should be displayed.
- **Step 5**: Log out and log back in using the new username.
  - **Expected Result**: You should be able to log in with the new username, and the profile page should reflect the updated username.

#### Changing Password

- **Step 1**: Log in and navigate to your profile page.
- **Step 2**: Click the "Edit" button.
- **Step 3**: Click the "change password" button.
- **Step 4**: Enter a new password, confirm the new password and click "Save".
  - **Expected Result**: The password should be updated successfully, and a confirmation message (e.g., "Password updated successfully") should be displayed.
- **Step 5**: Log out and attempt to log back in using the new password.
  - **Expected Result**: You should be able to log in with the new password, and the login process should work as expected.
- **Invalid Password Change**:
  - **Step 1**: Try to enter a new password that doesn’t meet the required criteria (e.g., too short or missing special characters).
    - **Expected Result**: The system should display an error message indicating the password requirements.
  - **Step 2**: Attempt to confirm the new password with a mismatched confirmation field.
    - **Expected Result**: An error message should be displayed, indicating that the passwords do not match.

#### Adding a Profile Picture

- **Step 1**: Navigate to the "Profile Picture" section on the profile page.
- **Step 2**: Click the "Upload" button and select an image file from your computer.
- **Step 3**: After selecting the image, click "Save" to upload the profile picture.
  - **Expected Result**: The profile picture should be uploaded and displayed in the profile picture section, with a confirmation message (e.g., "Profile picture updated successfully").
- **Step 4**: Refresh the profile page to ensure the profile picture persists after a page reload.
  - **Expected Result**: The new profile picture should still be displayed after the page reloads.
- **Invalid Profile Picture Upload**:
  - **Step 1**: Try to upload an unsupported file type (e.g., a text file) or an image that exceeds the allowed size limit.
    - **Expected Result**: The system should prevent the upload and display an error message indicating the issue.

### Summary

All tests have been conducted successfully, and all functionalities have passed as expected.

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
