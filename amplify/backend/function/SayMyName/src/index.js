const axios = require("axios");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    return await axios
        .get('https://63721e25025414c63706a994.mockapi.io/afc/username')
        .then(response => response.data.id)
        .catch(err => 'anonymous');
};
