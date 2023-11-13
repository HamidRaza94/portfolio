import PropTypes from 'prop-types';
import Image from 'next/image';

const Logo = (props) => {
  const { img, alt, radius = 6 } = props;

  return (
    <div className={`flex justify-center items-center rounded-full bg-white w-${radius} h-${radius}`}>
      <Image src={img} alt={alt} className={`w-${radius - 1} h-${radius - 1}`}/>
    </div>
  );
};

Logo.propTypes = {
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  radius: PropTypes.number,
};

export default Logo;
