exports.handler = (event, context, callback) => {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			message: `Hello world ${Math.floor(Math.random() * 10)}`,
		}),
	});
};
