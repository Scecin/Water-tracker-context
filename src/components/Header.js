import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {

    const {name} = useContext(UserContext)

    return (
        <>
            <h2>Hello {name} 👋</h2>
        </>
    )
}

export default Header;
