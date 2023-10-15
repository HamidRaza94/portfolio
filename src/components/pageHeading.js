import { forwardRef } from 'react';

const PageHeading = (props, ref) => {
  const { label } = props;

  return <h1 ref={ref} className="text-2xl text-center dark:text-gray-300 mb-5">{label}</h1>;
};

export default forwardRef(PageHeading);
