import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../auth/LoginFormModal';
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

function Header() {
  const user = useSelector((state) => state.session.user);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://cdn.discordapp.com/attachments/920377762068447282/989333770492584007/OpenMenu_1.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p className="nav-host">Become a host</p>
        <LanguageIcon />
        <ProfileButton user={user} />
      </div>
    </div>
  );
}

// function Header({ isLoaded }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = <ProfileButton user={sessionUser} />;
//   } else {
//     sessionLinks = (
//       <>
//         <LoginFormModal />
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         <NavLink exact to="/">
//           Home
//         </NavLink>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }

export default Header;
