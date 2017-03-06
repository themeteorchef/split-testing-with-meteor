import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { composeWithTracker } from 'react-komposer';
import { Movies } from '../../api/movies/movies.js';
import MovieDetails from '../components/Movie.js';
import { Loading } from '../components/Loading.js';

const composer = ({params}, onData) => {
  const subscription = Meteor.subscribe('movies.byId',params._id);

  if (subscription.ready()) {
    const movie = Movies.findOne({_id:params._id});
    onData(null, { movie });
  }
};

export default composeWithTracker(composer, Loading)(MovieDetails);
