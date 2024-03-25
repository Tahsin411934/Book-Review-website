import { Link } from 'react-router-dom';
import '../../Styles/Banner.css'
import banneImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="container mx-auto h-[554px] hero min-h-screen banner-bg Playfair_font rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banneImage} className="max-w-sm " />
    <div>
      <h1 className="text-5xl font-bold text-[#131313]">Books to freshen <br /> up your bookshelf</h1>
      <Link to={'/listedBook'} ><button className="btn font-bold text-xl bg-[#23BE0A] text-[#FFFFFF]">View The List</button></Link>
      
    </div>
  </div>
</div>
    );
};

export default Banner;