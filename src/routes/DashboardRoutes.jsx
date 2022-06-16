import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ContainerHome from '../pages/ContainerHome'


const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<ContainerHome />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	)
}

export default DashboardRoutes