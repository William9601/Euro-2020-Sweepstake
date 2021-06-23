import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
	<Auth0Provider
		domain={domain}
		clientId={clientId}
		redirectUri={'http://localhost:3000/user/1'}
	>
		<App />
	</Auth0Provider>,
	document.getElementById('root')
);
