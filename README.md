## Manual Testings

This section provides a guide for setting up and performing manual testing using MSW (Mock Service Worker) and Jest. The focus is on the NavBar component, ensuring it behaves correctly under different user states.

### Setup

Ensure MSW is installed as a development dependency with the command `npm install msw --save-dev`

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




### Running the Tests

Run your tests using the following command: `npm test`
