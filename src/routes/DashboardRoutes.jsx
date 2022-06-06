import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';

const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>

		</>
	);
};
export default DashboardRoutes;