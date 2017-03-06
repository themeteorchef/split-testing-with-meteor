import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { Movies } from '../../api/movies/movies.js';

const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' },
  },
  roles: ['admin'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});

const movies = [{
  title: 'Ghostbusters',
  year: '1984',
  rated: 'PG',
  plot: 'Three former parapsychology professors set up shop as a unique ghost removal service.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg',
  detailedPlot:"Peter Venkman, Ray Stantz and Egon work at the University where they delve into the paranormal and fiddle with many unethical experiments on the students. As they are kicked out of the University do they really understand their knowledge of the paranormal and go into business for themselves. Under the new snazzy business name of 'Ghostbusters', and living in the old firehouse building they work out of, they are called to rid New York City of paranormal phenomenon at everyone's whim.... for a price. They make national press as the media thinks and pressures everybody the Ghostbusters are the cause of it all. Thrown in jail by the EPA, the mayor takes a chance and calls on them to help save the city. Unbeknownst to all, a long dead Gozer worshiper (Evo Shandor) erected downtown apartment building is the cause of all the paranormal activity. They find out the building could resurrect the ancient Hittite god, Gozer, and bring an end to all of humanity. Who are you gonna call to stop this ...",
}, {
  title: 'The Matrix',
  year: '1999',
  rated: 'R',
  plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
  detailedPlot:"Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.",
}, {
  title: 'Whiplash',
  year: '2014',
  rated: 'R',
  plot: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg',
  detailedPlot:"A young and talented drummer attending a prestigious music academy finds himself under the wing of the most respected professor at the school, one who does not hold back on abuse towards his students. The two form an odd relationship as the student wants to achieve greatness, and the professor pushes him.",
}, {
  title: 'Almost Famous',
  year: '2000',
  rated: 'R',
  plot: 'A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies it on their concert tour.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  detailedPlot: "William Miller is a 15-year-old kid hired by Rolling Stone magazine to tour with and write about Stillwater, an up and coming rock band. This wonderfully witty coming-of-age film follows William as he falls face first to confront life, love, and lingo.",
}];

movies.forEach((movie) => {
  const movieExists = Movies.findOne({ title: movie.title });
  if (!movieExists) Movies.insert(movie);
});
