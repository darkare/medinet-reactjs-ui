/*
 * Constant value
 * For the test challange, the user is hard coded to 1 which is created by default at the backend API. Normally, the user id is obtained
 * during sign on and will be set in the Context API. Due to time constraint, this is not implemented.
 * 
 */
export default Object.freeze(
    {
        BASE_URL:'https://localhost:44323',
        BROWSE_TITLE: 'Browse',
        TAKE_PHOTO_TITLE: 'Take Photo',
        USER_ID: 1
    }
);