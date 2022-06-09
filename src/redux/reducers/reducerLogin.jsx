import { typesLogin } from "../types/typesLogin";

export const reducerLogin = (state = {}, action) => {
	switch (action.type) {
		case typesLogin.login:
			return {
				user: action.payload.user,
				pass: action.payload.pass
			}
		case typesLogin.register:
			return {
				name: action.payload.name,
				email: action.payload.email,
				password: action.payload.password,
			}
		case typesLogin.logout:
			return {}
		default:
			return state
	}
}