import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';

import './Header.css';

import { searchResultsType } from '../../store/search';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [searchString, setSearchString] = useState('');
  const [divStyle, setDivStyle] = useState({ visibility: 'hidden' });
  const searchResults = useSelector((state) => Object.values(state?.search));
  // const searchResultsArr = Object.assign([], searchResults);

  // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$ search results****', searchResults);
  // console.log(
  //   '################ searchResultssearchResultssearchResults',
  //   searchResults[0]?.Events[0]?.name
  // );

  useEffect(() => {
    if (searchString !== '') {
      dispatch(searchResultsType(searchString));
    }
  }, [dispatch, searchString]);

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://cdn.discordapp.com/attachments/920377762068447282/989333770492584007/OpenMenu_1.png"
          alt=""
        />
      </Link>

      <div className=" header__center">
        <div>
          <input
            placeholder="Search experiences"
            type="search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="navbar-search-input-field"
            onFocus={(e) => setDivStyle({ visibility: 'visible' })}
          />
          <SearchIcon />
          <div style={divStyle} className="searchResults-container">
            {searchString !== '' &&
              searchResults?.map((type) => (
                <div className="name-in-results">
                  <div className="type-results">{type.name}</div>
                  {type.Events.map((event, index) => (
                    <a
                      key={event.id}
                      href={`/events/${event?.id}`}
                      className="single-result"
                    >
                      <div>{toTitleCase(event?.name)}</div>
                    </a>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="header__right">
        <Link to="/events/new" style={{ textDecoration: 'none' }}>
          <p className="nav-host">Become a host</p>
        </Link>
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
