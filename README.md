This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before you run this project, please ensure the backend API is started and note the base URL.
The user is hard-coded to 1 which is created by default at the backend API. Normally, the user id is obtained
during sign on and will be set in the Context API. Due to time constraint, this is not implemented.

This application is developed using mobile first. It uses the HTML 5 feature to interact with the camera device. 
Before submission, it was tested on a laptop with camera using the following browsers:
 - Chrome Version 85.0.4183.83 (Official Build) (64-bit)
 - Firefox 80.0.1 (64-bit) not work in Firefox 
 - Edge Version 85.0.564.44 (Official build) (64-bit).

Note: You must only have one browser opened to avoid any contention on the camera hardware.



IMPORTANT: 
1. To point to the Restful API,  you will need to edit BASE_URL at the Constant.js file under the src folder. Default value is 'https://localhost:44323'.
2. After that you will need to install the pacakges by running:
  ### 'npm install'
3. Then run the project using 
  ### 'npm start'
  

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The only unit test is the App.test.js. You can test it by:
### 'npm test'

Thanks.


