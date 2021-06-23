import axios from 'axios';

const base_url = process.env.REACT_APP_BACKEND_API_HOST;

export const getMatches = () => {
	return axios.get(`${base_url}/match`);
};

export const getPredictions = (pool, user) => {
	return axios.get(`${base_url}/prediction/${pool}/user/${user}`);
};

export const postPredictions = (pool, user, predictions) => {
	return axios.post(`${base_url}/prediction/${pool}/user/${user}`, {
		data: {
			predictions,
		},
	});
};

export const putPredictions = (pool, user, predictions) => {
	return axios.put(`${base_url}/prediction/${pool}/user/${user}`, {
		data: {
			predictions,
		},
	});
};

export const getPools = (userId) => {
	return axios.get(`${base_url}/pool/user/${userId}`);
};

export const postCreatePool = (userId) => {
	return axios.post(`${base_url}/pool/user/${userId}`);
};

export const postJoinPool = (poolId, userId) => {
	return axios.post(`${base_url}/pool/${poolId}/user/${userId}`);
};

export const getLeaderboard = (nanoId) => {
	return axios.get(`${base_url}/leaderboard/${nanoId}`);
};

export const login = (user) => {
	return axios.post(`${base_url}/login/${user}`);
};

export const register = (user, email) => {
	console.log('Axios Log =>', user, email);
	return axios.post(`${base_url}/register/${user}`);
};

// const db = require("../models/pg");

// const createUser = async (req, res) => {
//   try {
//     const { email, name } = req.body;
//     const user = await db.user.create({
//       email,
//       name,
//     });
//     res.status(200).json(user);
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.log(e);
//     res.status(500).json({ message: "Error" });
//   }
// };

// module.exports = {
//   createUser,
// };

// ROUTER:
// router.post("/user", userController.createUser);
