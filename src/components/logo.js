import Image from 'next/image';

const Logo = (props) => {
  const { img, alt, radius = 6 } = props;

  return (
    <div className={`flex justify-center items-center rounded-full bg-white w-${radius} h-${radius}`}>
      <Image src={img} alt={alt} className={`w-${radius - 1} h-${radius - 1}`}/>
    </div>
  );
};

export default Logo;
