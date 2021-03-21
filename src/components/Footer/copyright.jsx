import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant='body2' align='center' color='textSecondary'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://github.com/lucpizz/employee-org-chart'>
        GitHub: lucpizz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(0),
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container
        component='main'
        className={classes.main}
        maxWidth='sm'></Container>

      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Typography variant='body2' />
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
