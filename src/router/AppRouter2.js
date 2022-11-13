import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import { LoginScreen } from '../heroes/components/login/LoginScreen';
import { DashboarRoutes } from './DashboarRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>      
        <Routes>
            
            <Route path="/login" element={ <LoginScreen /> } />
            <Route path="/*" element={ <DashboarRoutes /> } />
            
        </Routes>
    </BrowserRouter>
  )
}
