import { Link, useNavigate } from 'react-router-dom';
import { user } from '../../lib/currentUsers';
import User from './User';

const Menu = () => {
  const currentUser = user();
  const style = `pt-6 gap-5 bg-white h-screen px-8 w-[16rem] origin-top animate-open-menu text-lg lg:animate-none lg:text-base  lg:flex lg:items-center lg:bg-transparent lg:w-fit lg:h-fit lg:p-0`;
  return (
    <ul className={style}>
      <li className="mb-3 hover:scale-x-110 hover:text-grey-200 duration-300 cursor-pointer lg:mb-0 lg:hover:text-primary-300">
        Fiverr Business
      </li>
      <li className="mb-3 hover:scale-x-110 hover:text-grey-200 duration-300 cursor-pointer lg:mb-0 lg:hover:text-primary-300">
        Explore
      </li>
      <li className="mb-3 hover:scale-x-110 hover:text-grey-200 duration-300 cursor-pointer lg:mb-0 lg:hover:text-primary-300">
        English
      </li>
      <li className="mb-3 hover:scale-x-110 hover:text-grey-200 duration-300 cursor-pointer lg:mb-0 lg:hover:text-primary-300">
        <Link to="/login">Sign In</Link>
      </li>
      {!currentUser?.isSeller && (
        <li className="mb-3 hover:scale-x-110 hover:text-grey-200 duration-300 cursor-pointer lg:mb-0 lg:hover:text-primary-300">
          <Link to="/signup">Become a Seller</Link>
        </li>
      )}
      {!currentUser && (
        <Link
          to="/signup"
          className="bg-primary-300 pl-4 pr-4 text-primary-200 rounded hover:bg-primary-100 duration-700 mb-3 lg:mb-0"
        >
          Join
        </Link>
      )}
      <div className="invisible lg:visible">
        <User />
      </div>
    </ul>
  );
};

export default Menu;
