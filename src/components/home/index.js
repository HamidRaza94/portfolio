import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Grid
      container
      alignItems="center"
      flexDirection="column"
    >
      <Grid item>
        <Image
          src='/dp1.jpg'
          width={250}
          height={300}
          alt="Picture of the author"
          style={{
            borderRadius: '100%',
          }}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems="center"
          flexDirection="column"
        >
          <Grid item>
            <Typography variant="h5" sx={{ marginTop: '1rem' }}>
              Hi, I am
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{}}>
              Mohammad Hamid Raza
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p" sx={{ color: theme => theme.palette.grey }}>
              Full stack developer | MERN
            </Typography>
          </Grid>
          <Grid item>
            
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
