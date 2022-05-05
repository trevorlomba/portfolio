import metroTrainerImg from '../../../assets/metroTrainer.png'
import xsAndOhsImg from '../../../assets/xsAndOhs.png'
import scientificCalculatorImg from '../../../assets/scientificCalculator.png'
import basicCalculatorImg from '../../../assets/basicCalculator.png'
import myPlaylistImg from '../../../assets/myPlaylist.png'
import talkMoreImg from '../../../assets/talkMore.png'


export const metroTrainer = {
    'title': 'MetroTrainer',
    'description': 'A metronome app with added functionality to aid musicians in their practice. The metronome updates every measure with a new random key which the musician is to use as reference to play whichever patterns they are practicing in the new key, in rhythm, every measure.',
    'deployedUrl': 'https://trevorlomba.github.io/metronome-client/',
    'backendUrl': 'https://github.com/trevorlomba/metronome',
    'frontendUrl': 'https://github.com/trevorlomba/metronome-client',
    'technologies': 'reactjs, bootstrap, express, mongodb, nodejs, javascript, html, css',
    'frontendText': 'frontend repo',
    'backendText': 'backend repo',
    'img': metroTrainerImg
}
export const xsAndOhs = {
    'title': "X's and Oh's",
    'description': 'A tic tac toe web app leveraging jQuery, css, and flexbox for gameboard design and responsiveness as well as REST api via express to update game status and user creation / authentication.',
   'deployedUrl': 'https://trevorlomba.github.io/tictacto-client/',
    'frontendUrl': 'https://github.com/trevorlomba/tictacto-client',
    'frontendText': 'frontend repo',
    'backendText': '',
    'technologies': 'jQuery, bootstrap, express, mongodb, nodejs, javascript, html, css',
    'img': xsAndOhsImg
}
export const scientificCalculator = {
    'title': 'Scientific Calculator',
    'description': 'A scientific calculator I built without tutorials or outside help as a personal challenge after completing my basic jQuery calculator. Built using react, this calculator employs efficient logic including field look-ups to streamline the user experience.',
    'deployedUrl': 'https://trevorlomba.github.io/react-calc/',
    'frontendUrl': 'https://github.com/trevorlomba/scientific-calc',
    'frontendText': 'frontend repo',
    'backendText': '',
    'technologies': 'jQuery, bootstrap, nodejs, javascript, html, css',
    'img': scientificCalculatorImg
}
export const basicCalculator = {
    'title': 'Basic Calculator',
    'description': 'One of my first personal projects, I reasoned out the logic used to make this calculator accurate, interactive and aesthetic. One of my favorite features is how the appearance of the operands, operators, answers, and past equations all update via css as new inputs are selected.',
    'deployedUrl': 'https://trevorlomba.github.io/calculator/',
    'frontendUrl': 'https://github.com/trevorlomba/calculator',
    'frontendText': 'frontend repo',
    'backendText': 'backend repo',
    'technologies': 'jQuery, bootstrap, nodejs, javascript, html, css',
    'img': basicCalculatorImg
}
export const myPlaylist = {
    'title': 'My Playlist',
    'description': 'A single-page application with user authentication that interacts with a custom API. Registered users can create, read, update, and delete songs as part of a database of playlists.',
    'deployedUrl': 'https://trevorlomba.github.io/my-playlist-client/',
    'backendUrl': 'https://github.com/trevorlomba/my-playlist',
    'frontendUrl': 'https://github.com/trevorlomba/my-playlist-client',
    'frontendText': 'frontend repo',
    'backendText': 'backend repo',
    'technologies': 'jQuery, bootstrap, nodejs, javascript, html, css, mongodb, mongoose',
    img: myPlaylistImg
}
export const talkMore = {
    'title': 'Talk More',
    'description': 'Built collaboratively with two of my cohort classmates, talkMore is a message board where users can create, read, delete, and update posts which other users can read and comment on. Front-end built via React and React Router, backend built with mongoDB.',
    'deployedUrl': 'https://el-1ups.github.io/project-frontend/',
    'backendUrl': 'https://github.com/El-1ups/project-backend',
    'frontendUrl': 'https://github.com/El-1ups/project-frontend',
    'frontendText': 'frontend repo',
    'backendText': 'backend repo',
    'technologies': 'jQuery, bootstrap, nodejs, javascript, html, css, mongodb, mongoose',
    'img': talkMoreImg
}
