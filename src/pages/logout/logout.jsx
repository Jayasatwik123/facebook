import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
const { user, dispatch } = useContext(AuthContext);
const history = useHistory();
const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };
  