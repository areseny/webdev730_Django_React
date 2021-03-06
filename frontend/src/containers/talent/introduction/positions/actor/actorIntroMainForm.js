import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Panel from 'components/general/panel';
import ImportantRegardingButton from 'components/shiptalent/buttons/importantRegardingButton';
import Spacer from "components/general/spacer";
import { generateLinkWithPosition } from 'utils/appUtils';
import styles from 'styles';


class ActorIntroMainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: props.position
    }
  }

  getInfoFromProps(props) {
    this.setState({
      position: props.position
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.getInfoFromProps(nextProps)
    })
  }

  renderIntroductionButton(prefixTitle, suffixTitle, link, subTitle) {
    const { classes } = this.props;
    let items = [];

    items.push(<Grid item lg={3} md={3} sm={3} xs={1} />);
    items.push(
      <Grid item lg={6} md={6} sm={6} xs={10}
            className={classes.talentProfileGuideButtonItem}
      >
        <Link to={link}>
          <Button
            variant="contained"
            color="primary"
            className={classes.talentIntroductionButton}
            fullWidth={true}
          >
            <Typography className={classes.talentIntroductionButtonTitle}>
              {prefixTitle}
              <Typography className={classes.talentIntroductionButtonSuffixTitle}>
                {suffixTitle}
              </Typography>
            </Typography>
            { subTitle && (
              <Typography className={classes.talentIntroductionButtonTitle}>
                {subTitle}
              </Typography>
            )}
          </Button>
        </Link>
      </Grid>
    );
    items.push(<Grid item lg={3} md={3} sm={3} xs={1} />);

    return items
  }

  renderContents() {
    const { classes } = this.props;
    const { position } = this.state;

    return (
      <Panel>
        <Grid container spacing={16} justify="center" alignItems="center">
          {
            this.renderIntroductionButton('I am an ', 'Actor',
              generateLinkWithPosition(position, '/talent/video-audition/actor-intro')
            )
          }
          {
            this.renderIntroductionButton('I am an ', 'Actor Who Sings',
              generateLinkWithPosition(position, '/talent/video-audition/actor-sings-intro')
            )
          }
          {
            this.renderIntroductionButton('I am an ', 'Actor Who Moves',
              generateLinkWithPosition(position, '/talent/video-audition/actor-moves-intro')
            )
          }
          {
            this.renderIntroductionButton('I am an ', 'Actor Who Dances',
              generateLinkWithPosition(position, '/talent/video-audition/actor-dances-intro')
            )
          }
          {
            this.renderIntroductionButton('I am a ', 'Vocalist Who Acts',
              generateLinkWithPosition(position, '/talent/video-audition/actor-vocalist-acts-intro')
            )
          }
          {
            this.renderIntroductionButton('I am a ', 'Dancer Who Acts',
              generateLinkWithPosition(position, '/talent/video-audition/actor-dancer-acts-intro')
            )
          }
        </Grid>

        <Spacer size={50} />

        <Grid container spacing={16} direction="column" justify="center" alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={10} className={classes.talentProfileGuideButtonItem} >
            <ImportantRegardingButton formTitle={this.props.formTitle} />
          </Grid>
        </Grid>
      </Panel>
    )
  }

  render() {
    return (
      <div>
        {this.state.notification && <Alert color="info">{this.state.notification}</Alert>}
        {this.renderContents()}
      </div>
    )
  }
}

export default withStyles(styles)(ActorIntroMainForm);
