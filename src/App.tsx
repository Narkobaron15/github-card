import {Route, Routes} from "react-router-dom"
import Home from "./components/Home.tsx"
import Layout from "./core/Layout.tsx"
import NotFound from "./core/NotFound.tsx"
import Repositories from "./components/Repositories.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/repos" element={<Repositories/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App
