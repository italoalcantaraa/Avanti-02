import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages'

export default function Routess() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}
