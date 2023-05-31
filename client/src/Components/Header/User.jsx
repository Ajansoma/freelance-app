import { useState, useContext } from 'react';
import noAvatar from '../../assets/noavatar.jpeg';
import { httpSendData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';
import FiverrContext from '../../store/fiverrContext';
import { Link } from 'react-router-dom';
import { user } from '../../lib/currentUsers';

const User = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = user();
  const { logoutHandler: logout } = useContext(FiverrContext);

  const showMenuHandler = function () {
    setShowMenu((prevState) => !prevState);
  };

  const logoutHandler = async function () {
    setIsLoading(true);
    await httpSendData(`auth/logout`, null);
    localStorage.removeItem('currentUser');
    logout();
    setIsLoading(false);
  };
  return (
    <>
      {currentUser && (
        <div onClick={showMenuHandler} className="cursor-pointer">
          <div className="flex gap-2 items-center object-cover">
            <img
              src={currentUser.profilePic || noAvatar}
              alt="user picture"
              className="w-8 h-8 rounded-full"
            />
            <span className="hover:scale-x-110 duration-300 text-lg cursor-pointer lg:text-lg">
              {currentUser?.username}
            </span>
          </div>
          {showMenu && (
            <div className="bg-white rounded p-8 mt-4 text-primary-300 text-sm absolute right-16 flex flex-col  shadow-lg shadow-primary-100/20 w-[14rem] gap-2">
              {currentUser?.isSeller && (
                <>
                  <Link
                    to="/mygigs"
                    className="hover:text-grey-200 duration-75"
                  >
                    MyGigs
                  </Link>
                  <Link
                    to="/addgig"
                    className="hover:text-grey-200 duration-75"
                  >
                    Add New Gig
                  </Link>
                </>
              )}
              <div className="flex flex-col gap-2">
                <Link to="/orders" className="hover:text-grey-200 duration-75">
                  Orders
                </Link>
                <Link
                  to="/messages"
                  className="hover:text-grey-200 duration-75 pb-2"
                >
                  Messages
                </Link>
                <button
                  onClick={logoutHandler}
                  className="bg-primary-100 hover:bg-primary-300 duration-75 pt-1 pb-1 pl-4 pr-4 text-primary-200 rounded text-center"
                >
                  {!isLoading && <div>Logout</div>}
                  {isLoading && LoadingSpinner(4, 4)}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default User;
