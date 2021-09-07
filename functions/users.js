exports.handler = (event, context) => {
     return {
         statusCode: 200,
         body: JSON.stringify({id: 1, message: 'Hello users'})
     }
}