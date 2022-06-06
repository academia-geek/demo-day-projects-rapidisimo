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
				email: action.payload.email,
				pass: action.payload.pass,
				name: action.payload.name,
				nickname: action.payload.nickname
			}
		case typesLogin.logout:
			return {
			}
		default:
			return state
	}
}