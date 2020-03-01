const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Authorization request denied');
		}

		const token = req.headers.authorization.split(' ')[1];
		if (token === 'null' && token === '') {
			return res.status(401).send('No Authorization Request');
		}

		const payload = jwt.verify(token, process.env.JWT_KEY);
        req.email = payload.email;
		next();
	} catch (error) {
		res.status(401).send({ error: 'Not authorized to access this resource' });
	}
};

module.exports = auth;
