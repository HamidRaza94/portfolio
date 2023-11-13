import PropTypes from 'prop-types';

const Card = (props) => {
  const { title, subTitle, description, techs } = props;

  return (
    <div className="max-w-xs m-2 rounded overflow-hidden shadow dark:bg-gray-300">
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="font-thin text-sm italic">{subTitle}</span>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {techs.map((tech, index) => (
          <span
            key={index.toString()}
            className="shadow-md inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
