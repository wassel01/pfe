import { useDispatch, useSelector } from "react-redux";
import { Link ,Navigate} from "react-router-dom";
import { userLogout } from "../redux/slice/user";
import { useNavigate } from 'react-router-dom';
export const NavBare = () => {
  const { user, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    // Navigate to the login page after logout
    <Navigate/>
  };
  return (
    <div>
      <ul>
        <Link to={`/user/${user.id}`}>
          <li>Reglement Banquaire </li>
        </Link>
        <Link to={`/chiffre d'affaire globale`}>
          <li>Chiffre d'affaire globale </li>
        </Link>
        <Link onClick={handleLogout} >
          <li>Logout </li>
        </Link>
      </ul>
    </div>
  );
};
