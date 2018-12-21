import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageLoader from 'react-loading-image';
import { makeTitleWithAllPositionTypes, getSexTitle, getAvatarFromTalentInfo, makeTalentOverviewTitle } from 'utils/appUtils';
import styles from 'styles';
import '../client.css';

class TalentItem extends Component {

  render() {
    const { talent, classes } = this.props
    const talent_picture = getAvatarFromTalentInfo(talent)
    if (talent) {

      return (
        <Grid container spacing={24}>
          <Grid item xl={1} lg={1} md={1} sm={2} xs={3}>
            <Link to={{
                    pathname: '/client/talent_view',
                    state: { talentInfo: talent }
                  }}
                  className={classes.pictureContainer}
            >
              <ImageLoader
                src={talent_picture}
                className={classes.clientTalentSearchResultPicture}
                loading={() => <div className={classes.clientTalentSearchResultPicture}>Loading...</div>}
                error={() => <img src={require('images/missing.png')} className={classes.clientTalentSearchResultPicture}/>} />
            </Link>
          </Grid>
          <Grid item xl={11} lg={11} md={11} sm={10} xs={9}>
            <Grid
              container spacing={0} direction="column" justify="flex-start" alignItems="flex-start"
              key={`casting-request-talent-table-item-${!!talent && talent.id}-description`}
            >
              <Grid item lg={12} md={12} xs={12}>
                <Typography className={[classes.descriptionText, classes.leftText]}>
                  { makeTalentOverviewTitle(talent)}
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <Typography className={[classes.descriptionText, classes.bold, classes.leftText]}>
                  {`“${talent.head_line}”`}
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <Typography className={[classes.descriptionText, classes.leftText]}>
                  {`Average Rating: ${talent.average_rating ? talent.average_rating : ''}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }

    return <div/>
  }
}

export default withStyles(styles)(TalentItem);