import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
  return (
    <div className='text-center'>
        <img className='mx-auto mt-12 mb-5' src={logo} alt="" />
        <p className='text-lg text-[#706F6F] mb-2'>Journalism Without Fear or Favour</p>
        <p className='text-xl font-medium text-[#403F3F] mb-7'>{moment().format("dddd")} <span className='text-[#706F6F]'>{moment().format("MMMM D, YYYY")}</span></p>
    </div>
  );
};

export default Header;