import "./Section1.css";
import { useNavigate } from "react-router-dom"; // Adicione esta linha
import { useState } from "react";

export default function Section1({ setUsername }) {
  const navigate = useNavigate(); // Hook para navegação
  const [inputValue, setInputValue] = useState("");
  const [cpf, setCpf] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  // Função para formatar o CPF enquanto digita
  function formatCpf(value) {
    return value
      .replace(/\D/g, "") // Remove tudo que não for número
      .replace(/^(\d{3})(\d)/, "$1.$2") // Coloca o primeiro ponto
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3") // Segundo ponto
      .replace(/\.(\d{3})(\d)/, ".$1-$2") // Hífen
      .slice(0, 14); // Limita ao tamanho máximo
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    if (!inputValue || cpf.length < 14 || !isChecked) {
      setError("Campos inválidos ou não autorizados");
      setTimeout(() => setError(""), 3000);
      return;
    }
  
    setUsername(inputValue);
    setError("");
  
    // Redireciona para a Section2 após validação
    navigate("/section2");
  }
  
  return (
    <div className="section1">
      <div className="background">
        <div className="title">
          <p>LEAKARD</p>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Digite seu nome"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            
            <input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(formatCpf(e.target.value))}
              maxLength={14} // Garante que não passe do limite
            />

            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="checkbox-custom"></span>
              Ao prosseguir declaro que concordo com os termos de uso do site, permito a utilização de cookies e confio minhas credenciais.
            </label>
            <button type="submit">CONTINUAR</button>

            {/* Aplica a animação ao erro */}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
