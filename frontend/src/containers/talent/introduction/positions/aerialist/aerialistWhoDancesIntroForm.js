import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Panel from 'components/general/panel';
import AerialistIntroCommon from './aerialistIntroCommon';
import styles from 'styles';

class AerialistWhoDancesIntroForm extends Component {

  renderAdditional() {
    const { classes } = this.props;

    return (
      <Typography className={classes.descriptionText}>
        {`Since you are an Aerialist Who Dances, `}
        <Typography className={classes.descriptionStrongRed}>
          Dance Demonstration Videos
        </Typography>
        {` and `}
        <Typography className={classes.descriptionStrongRed}>
          Dance Combination Videos
        </Typography>
        {` are `}
        <Typography className={classes.descriptionItalicRed}>
          required
        </Typography>
        {`. The dance combinations are advanced and geared toward very skilled dancers. If you are a
        true double- or triple-threat, simply follow the instructions in the `}
        <Typography className={classes.boldText}>
          My Dance Audition Videos
        </Typography>
        {` section to create audition videos for `}
        <Typography className={classes.underlineText}>
          every
        </Typography>
        {` dance style in which you are proficient. If you find the dance combinations too challenging,
        you may wish to categorize yourself on this site as an Aerialist Who Moves and complete the Movement
        Combination Video instead.`}
      </Typography>
    )
  }

  render() {
    return (
      <Panel>
        <Grid container spacing={16} justify="center" alignItems="center">
          <Grid item lg={1} md={1} sm={1} xs={1} />
          <Grid item lg={10} md={10} sm={10} xs={10}>
            <AerialistIntroCommon formTitle={this.props.formTitle} />
            {this.renderAdditional()}
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} />
        </Grid>
      </Panel>
    )
  }
}


export default withStyles(styles)(AerialistWhoDancesIntroForm);
