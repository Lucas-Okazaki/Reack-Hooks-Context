import React from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            <DadosUsuario />
        </>
    );
}

export default FormularioCadastro;



