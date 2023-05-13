import Typography from '@mui/material/Typography';

const Logo = () => {
  const logoName = '<Hamid />';
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {logoName}
    </Typography>
  );
};

export default Logo;
