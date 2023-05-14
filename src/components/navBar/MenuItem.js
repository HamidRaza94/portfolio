import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MenuItem = (props) => {
  const { Icon, label, id, selected, handleClick } = props;

  return (
    <Button
      variant="text"
      color="black"
      sx={{
        margin: 0,
        padding: 0,
        backgroundColor: (theme) => selected ? theme.menu.selectedMenu : 'none',
        color: (theme) => selected ? theme.palette.white.main : theme.menu.text,
      }}
      onClick={() => handleClick(id)}
    >
      <Grid container flexDirection="column" alignItems="center">
        <Grid item>
          <Icon />
        </Grid>
        <Grid item>
        <Typography variant="button">{label}</Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default MenuItem;
