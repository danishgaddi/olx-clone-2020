import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardsimg from ".././cardsimg/table.jpg";
import {Link} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 160,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link to="/tabledata"><CardMedia
          className={classes.media}
          image={cardsimg}
          title="Honda CD70"
        /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            RS: 35000
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Brand : Wooden Packer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Home table ok condition with Chairs
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="textSecondary">
          Queeta Balochistan
        </Button>
        <Button size="small" color="textSecondary">
          Pakistan
        </Button>
      </CardActions>
    </Card>
  );
}