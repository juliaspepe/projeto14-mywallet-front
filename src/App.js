import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoContext } from "./InfoContext";
import GlobalStyle from "./style/GlobalStyle"
import PageLogin from "./PageLogin";
import PageCadastro from "./PageCadastro";
import PageRegistros from "./PageRegistros";
import PageNovaEntrada from "./PageNovaEntrada";
import PageNovaSaida from "./PageNovaSaida";
import PageLogout from "./PageLogout";

export default function App() {
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [value, setValue] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');

    function createHeaders(){
        const auth = localStorage.getItem("token");
    
        const config = {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }
        return config;
    }

    const config = createHeaders();

return(
    <InfoContext.Provider value={{ name, setName, email, setEmail, password, setPassword, value, setValue, description, setDescription, token, setToken, userName, setUserName, config}}>
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageCadastro />} />
            <Route path="/registros" element={<PageRegistros />} />
            <Route path="/entrada" element={<PageNovaEntrada />} />
            <Route path="/saida" element={<PageNovaSaida />} />
            <Route path="/logout" element={<PageLogout />} />
        </Routes>
    </BrowserRouter>
</InfoContext.Provider>
)};