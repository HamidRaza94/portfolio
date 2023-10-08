// import Btn from '@mui/material/Button';

const Button = (props) => {
  const { children } = props;

  return (
    <button style={{ padding: 15 }}>
      {children}
    </button>
  );
};

export default Button;
