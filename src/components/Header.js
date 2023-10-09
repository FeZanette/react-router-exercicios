import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile } from "../routes/coordinator";

function Header() {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => goToHome(navigate)}>Ir para a página inicial</button>
            <button onClick={() => goToProfile(navigate, "FERNANDA", "123")}>Ir para a página de perfil</button>
        </div>
    )
}

export default Header