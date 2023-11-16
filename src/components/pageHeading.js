const PageHeading = (props) => {
  const { label } = props;

  return <h1 className="text-2xl text-center dark:text-gray-300 mb-5 md:hidden">{label}</h1>;
};

export default PageHeading;
