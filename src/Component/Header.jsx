import {Link} from "react-router-dom";
import './Header.scss';

const Header = () => {
    return(
        <header>
            <h1>Le Meilleur Pokedex</h1>
            <nav>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/320px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokemons">Pokemons</Link></li>
                </ul>
            </nav>
        </header>
    )
    }

export default Header;