/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    height: '100%',
    maxWidth: 290,
    borderRadius: 10,
    border: 'none',
    backgroundColor: '#FEF9EF',
    opacity: 0.85,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    borderBottom: '1px solid #BDBDBD',
    backgroundColor: '#17C3B2',
  },
});

function Character({ name, role, house, wand }) {
  const classes = useStyles();
  const imagesPath = '../../assets/images/gryffindor';

  return (
    <li style={{ backgroundImage: imagesPath }}>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src=""
              alt={name.charAt(0).toUpperCase()}
            />
          }
          title={name}
          // subheader={role}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {house}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {role}
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
}

export default Character;
