// Auth App

// Overview: 
    // landing page to log in
    // create new account if user doesn't already exist 
    // log out 

// Components:
    // Header
    // Card/CardSection
    // LoginForm
    // Button

// Anticipated Challenges:
    // handle text input
    // validating user data
    // incorrect password = big error message
    // attempting to log a user in = display a spinner

export * from './Button';
// read as "take everything from this file, and export into another"
// essentially a pass-through
// will call a syntax error if using the 'default' keyword
    // export default Button;
        // ==>
    // export { Button: Button }; 
        // ==> 
    // export { Button };

// What is Firebase? What will it do for us?
    // online database that connects directly to our app
    // as we develop and publish our app, we can be notified of that data change
    // allows us to keep our app up to date to match user functionality
    // firebase.google.com > enable email/password authentication method
    // npm i firebase

// initializing firebase:
    // best time to do it? right before the app renders to the device 
    // dotenv is probably best practice here
    // componentWillMount() { firebase.initializeApp() }