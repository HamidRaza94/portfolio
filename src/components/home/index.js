import Image from 'next/image';
import classNames from 'classnames';

// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import SendIcon from '@mui/icons-material/Send';
import Button from '@/components/button';

const Home = () => {
  return (
    <div className={classNames('h-[calc(100vh-48px)]')}>
      Home Page
    </div>
  );

  // return (
  //   <Grid
  //     container
  //     alignItems="center"
  //     flexDirection="column"
  //   >
  //     <Grid item>
  //       <Image
  //         src='/dp1.jpg'
  //         width={250}
  //         height={300}
  //         alt="Picture of the author"
  //         style={{
  //           borderRadius: '100%',
  //         }}
  //       />
  //     </Grid>
  //     <Grid item>
  //       <Grid
  //         container
  //         alignItems="center"
  //         flexDirection="column"
  //       >
  //         <Grid item>
  //           <Typography variant="h5" sx={{ marginTop: '1rem' }}>
  //             Hi, I am
  //           </Typography>
  //         </Grid>
  //         <Grid item>
  //           <Typography variant="h5" sx={{}}>
  //             Mohammad Hamid Raza
  //           </Typography>
  //         </Grid>
  //         <Grid item>
  //           <Typography variant="p" sx={{ color: theme => theme.palette.grey }}>
  //             Full stack developer | MERN
  //           </Typography>
  //         </Grid>
  //         <Grid item sx={{ marginTop: 3 }}>
  //           <Typography variant="p">
  //             Passionate programmer with a knack for learning new languages, producing quality work.
  //           </Typography>
  //         </Grid>
  //       </Grid>
  //       <Grid container flexDirection="column" sx={{ marginTop: '1rem' }}>
  //         <Grid item alignContent="flex-start">
  //           <Button>Contact Me</Button>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // );
}

export default Home;
