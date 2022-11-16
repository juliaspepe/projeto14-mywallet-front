import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoContext } from "./InfoContext";
import GlobalStyle from "./style/GlobalStyle"
import PageLogin from "./PageLogin";
import PageCadastro from "./PageCadastro";
import PageRegistros from "./PageRegistros";
import PageNovaEntrada from "./PageNovaEntrada";
import PageNovaSaida from "./PageNovaSaida";

export default function App() {
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [valor, setValor] = useState(undefined);
    const [descricao, setDescricao] = useState(undefined);

return(
    <InfoContext.Provider value={{ name, setName, email, setEmail, password, setPassword, valor, setValor, descricao, setDescricao}}>
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageCadastro />} />
            <Route path="/registros" element={<PageRegistros />} />
            <Route path="/novaentrada" element={<PageNovaEntrada />} />
            <Route path="/novasaida" element={<PageNovaSaida />} />
        </Routes>
    </BrowserRouter>
</InfoContext.Provider>
)};