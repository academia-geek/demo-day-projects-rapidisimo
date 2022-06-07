import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Repartidor from '../pages/Repartidor';

const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/repartidor" element={<Repartidor />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>

		</>
	);
};

export default DashboardRoutes;