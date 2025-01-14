import { Link } from "react-router"

const NavBar = () => {

    const name='yaeli'

    return(<><>

        <div>navbar</div>
        </><nav>
            <Link to='/'>Home  </Link>|
            <Link to='/UserPage'>    UserPage</Link> |
            <Link to={`/person/${name}`}> Person </Link>
        </nav></>

)

}
export default NavBar