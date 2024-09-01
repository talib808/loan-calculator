# Loan Calculator Application

`
This project is a React-based Loan Calculator application that allows users to input loan details, calculate the estimated monthly repayment, and simulate submitting the details for a personalized quote.
`
## Project Overview
> This application is built with React and includes the following features:

- A loan form for users to input loan amount, term, and interest rate.
- Calculation of estimated monthly repayments.
- Display of loan details and repayment summary.
- Simulation of submitting loan details to an API.

### Features
- Loan Form: Users can enter loan details such as amount, term, and interest rate.
- Repayment Calculation: Calculates the estimated monthly repayment based on user inputs.
- Loan Summary: Displays a summary of loan details and the calculated repayment.
- API Simulation: Simulates submission of loan details with a delay to mimic API interaction.
- Responsive Design: The application is fully responsive and provides a consistent user experience across devices.


### To set up and run the project locally

### Clone the Repository:

- git clone https://github.com/talib808/loan-calculator.git
- cd loan-calculator



### nstall Dependencies:

-npm install

## Start the Development Server:

- npm start



### Usage
- Loan Form:

- Enter the loan amount, term (in years), and interest rate in the provided fields.
- Click on "Calculate" to see the estimated monthly repayment.
- Submit for Quote:

- After calculation, click on "Submit for Quote" to simulate submitting the loan details.
- A confirmation message will be displayed upon successful submission.


### App.js
- The main component of the application that:

- Contains state management for loan details, monthly repayment, and confirmation messages.
- Renders LoanForm, LoanSummary, and SubmitButton components.
- Handles loan repayment calculation and submission simulation.
- LoanForm.js
- A form component where users input their loan details. It triggers the onCalculate function passed as a - prop when the form is submitted.

- LoanSummary.js
- Displays the summary of the loan details and the calculated monthly repayment.

- SubmitButton.js
-A button component that triggers the submission of loan details.

### App.css
- Contains styles for the application, ensuring a responsive and visually appealing design.

### Testing

-To run tests, use:

- npm test
- This will run the unit tests for the components using Jest and React Testing Library.