export const submitLoanDetails = async (loanDetails) => {
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: {
            message: 'Loan details submitted successfully!',
            loanDetails,
          },
        });
      }, 1000); 
    });
  };
  