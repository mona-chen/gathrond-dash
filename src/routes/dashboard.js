import Login from "../pages/auth/login/Login";

export const dashboard_routes = [
	{
		path: '/login',
		element: Login,
	},
	{
		path: '/register',
		element: Login,

	},
	{
		path: '/forgot-password',
		element: Login,

	},
	{
		path: '/accept-invite',
		element: Login,

	},
];
