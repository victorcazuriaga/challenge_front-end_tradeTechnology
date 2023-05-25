import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
