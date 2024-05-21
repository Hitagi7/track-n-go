import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./ParcelTrackerHeader.css";
import ButtonStack from "../ButtonStack";

function ParcelTrackerHeader() {
  const [user] = useAuthState(auth);

  return (
    <div className="ParcelTrackerHeader">
      <Link to={user ? "/DashboardPage" : "/"}>
        <img
          src="/src/assets/TNG Logo V2.png"
          alt="Logo Text"
          className="ParcelTrackerLogo"
        />
      </Link>
      <div className="Navi">
        <ButtonStack />
      </div>
    </div>
  );
}

export default ParcelTrackerHeader;
