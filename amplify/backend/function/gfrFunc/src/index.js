

exports.handler = async (event) => {
    // Add YOUR CODE, CALL DATABASE, ETC. HERE
    const cool_number = 3 + 4


    // THE response OBJECT IS WHAT WILL BE RETURNED TO THE FRONTEND
    // MAKE SURE TO UNCOMMENT TO ENABLE CORS -- This is a common source of error!!
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify('Hello from Lambda! Your cool number is: ' + cool_number),
    };
    return response;
};
