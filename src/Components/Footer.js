import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ReactTooltip from 'react-tooltip'

const styles = {
  root: { 
    clear: 'both',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  span: {
    textDecoration: 'underline'
  }
};

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography gutterBottom>
       CBT Exam Software {new Date().getFullYear()}
      </Typography>
      <ReactTooltip place="right" type="dark" effect="float"/>
    </div>
  );
}

export default withStyles(styles)(Footer);
