import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    width: 500,
    bottom: 0,
    position: 'fixed',
    flexGrow: 1,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction
        label='GitHub'
        icon={
          <GitHubIcon
            onClick={() =>
              (window.location.href =
                'https://github.com/lucpizz/employee-org-chart')
            }
          />
        }
      />
    </BottomNavigation>
  );
}
