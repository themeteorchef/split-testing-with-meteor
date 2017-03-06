/* eslint-disable new-cap */

import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Movies } from '../movies.js';

Meteor.publish('movies.search', (searchTerm) => {
  check(searchTerm, Match.OneOf(String, null, undefined));

  let query = {};
  const projection = { limit: 10, sort: { title: 1 } };

  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i');

    query = {
      $or: [
        { title: regex },
        { year: regex },
        { rated: regex },
        { plot: regex },
      ],
    };

    projection.limit = 100;
  }

  return Movies.find(query, projection);
});

Meteor.publish('movies.byId', (_id)=>{
  check(_id,  Match.OneOf(String));
  return Movies.find({_id});
});
