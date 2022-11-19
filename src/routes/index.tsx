import NotFound from '@views/404'
import Home from '@views/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
