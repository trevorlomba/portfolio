import metroTrainerImg from '../../../assets/metroTrainer.gif'
import xsAndOhsImg from '../../../assets/xsAndOhs.png'
import scientificCalculatorImg from '../../../assets/scientificCalculator.png'
import basicCalculatorImg from '../../../assets/basicCalculator.png'
import myPlaylistImg from '../../../assets/myPlaylist.png'
import talkMoreImg from '../../../assets/talkMore.png'
import portfolioImg from '../../../assets/portfolio.png'
import musicImg from '../../../assets/music.gif'
import notionAccessImg from '../../../assets/notionAccess.gif'
import stravaExploraImg from '../../../assets/strava-explora.png'
import gptAccessImg from '../../../assets/gpt-access.jpg'
import musicPortfolioPrototypeImg from '../../../assets/musicSplash.gif'


export const music = {
	title: 'Music Merch Cart Demo',
	description:
		"The application provides users with song previews and visualizers for multiple pieces of content, as well as the ability to access an artist's top links. To enhance the user experience and improve performance, I have implemented lazy loading content, controlled forms, and Context views. The project also boasts a cart functionality that enables clients to update their cart contents and variants dynamically, providing a seamless e-commerce experience. In addition to its other features, the project also incorporates React Router and URL params using hooks to enable smooth navigation and dynamic rendering of content.",
	description2:
		'To support the integration with the CommerceJS API, I have adhered to their documentation guidelines, ensuring that the integration is seamless and error-free. Furthermore, the application includes a Google Analytics integration to track traffic, while music streaming is facilitated by the React Howler component library.',
	deployedUrl: 'https://trevorlomba.github.io/music-demo/',
	frontendUrl: 'https://github.com/trevorlomba/music-demo',
	technologies: ['react', 'javascript', 'html5', 'css'],
	frontendText: 'frontend repo',
	backendText: '',
	img: musicImg,
}

export const stravaExplora = {
	title: 'Strava Explora',
	description:
		"The Strava Explora project is a Python data analysis project and React client that utilizes data from Strava's API. The goal of the project is to create a data-driven approach to my training, which includes a gradual ramp-up of effort over time to reduce the risk of injury. The project includes data visualizations that provide insights into key metrics such as pace, cadence, and max heart rate and demonstrates a strong understanding of data analysis, as well as how to apply that knowledge in the real world.",
	description2: '',
	deployedUrl: 'https://github.com/trevorlomba/Strava-Explora',
	frontendUrl: 'https://github.com/trevorlomba/Strava-Explora',
	technologies: ['python', 'react', 'javascript', 'html5', 'css'],
	frontendText: 'github repo',
	backendText: '',
	img: stravaExploraImg,
}
export const portfolio = {
	title: 'Software Engineering Portfolio',
	description:
		'This portfolio was developed using React, with React Router enabling site navigation and React Icons providing the badges featured in the Experience section. To achieve the desired design, I utilized CSS and React Bootstrap. Project querying is managed through a state-reflecting project property called "technologies", and the "read more" function is implemented at the Project Component level. ',
	description2:
		'In addition to the aforementioned features, this portfolio also includes a navigation bar in the top left corner, providing easy access to all sections of the site. Additionally, a contact form is included to allow visitors to easily get in touch.',
	deployedUrl: 'https://trevorlomba.github.io/portfolio/',
	frontendUrl: 'https://github.com/trevorlomba/portfolio',
	technologies: ['react', 'javascript', 'html5', 'css'],
	frontendText: 'frontend repo',
	backendText: '',
	img: portfolioImg,
}
export const metroTrainer = {
    'title': 'MetroTrainer',
    'description':" A metronome app with functionality to aid musicians in their improvisation and sight-reading practice. Users can select which of the traditional chromatic tones the metronome will playback at the top of every measure. Musicians are to use the changing note tones as a reference to play whichever patterns they are practicing in the new key and in rhythm.",
    'description2': '\nI used React and React Router to build the majority of this application, along with SCSS for some basic styling. Data such as the ‘notes bucket,’ tempo, and number of measures are stored and updated in state using hooks. Users can create their own accounts and CRUD user preferences as presets via a backend served by Express. The methods setInterval() and clearInterval() are integral to the metronome’s rhythm keeping. \n\nFuture iterations of this project will include:\n- Option to shift the tonal centre of the notes bucket randomly after a certain number of measures. \n- User ability ability to alter the rhythm of the audio playback \n- Option to playback arpeggiated note tones following the first beat of each measure. ',
    'deployedUrl': 'https://trevorlomba.github.io/metronome-client/',
    'backendUrl': 'https://github.com/trevorlomba/metronome',
    'frontendUrl': 'https://github.com/trevorlomba/metronome-client',
    'technologies': ['react', 'express', 'mongodb', 'nodejs', 'javascript', 'html5', 'css'],
    'frontendText': 'frontend repo',
    'backendText': 'backend repo',
    'img': metroTrainerImg
}

export const scientificCalculator = {
    'title': 'React Scientific Calculator',
    'description': 'A scientific calculator built using React and SCSS as a sequel to my basic jQuery calculator. This calculator employs efficient logic including field look-ups to streamline the handling of user input. Unlike my basic calculator, this application leverages mathJS to handle the calculations. State is used to keep track of answers, operands and operators as well as the number of open parenthesis and other details necessary to validate inputs and guarantee functionality.',
    'description2': '\nI plan to add event listeners for keyboard inputs, input validation for security and functionality, and buttons for additional scientific calculations.',
    'deployedUrl': 'https://trevorlomba.github.io/react-calc/',
    'frontendUrl': 'https://github.com/trevorlomba/react-calc',
    'frontendText': 'frontend repo',
    'backendText': '',
    'technologies': ['react', 'css', 'javascript'],
    'img': scientificCalculatorImg
}
export const xsAndOhs = {
    'title': "X's and Oh's",
    'description': 'A traditional tic-tac-toe application featuring responsive UI and user authentication. The game board itself is created using CSS and flexbox with interactive elements enabled through jQuery. As players take turns the game board updates with user messages and game updates. Express is used to enable the REST API and update game status/win tallies as well as user creation and authentication.',
    'description2': '\nFuture updates of this game will include implementing a simple AI using the minimax algorithm for users to test their skills against.',
   'deployedUrl': 'https://trevorlomba.github.io/tictacto-client/',
    'frontendUrl': 'https://github.com/trevorlomba/tictacto-client',
    'frontendText': 'frontend repo',
    'backendText': '',
    'technologies': ['jQuery', 'bootstrap', 'express', 'mongodb', 'nodejs', 'javascript', 'html5', 'css'],
    'img': xsAndOhsImg
}
export const basicCalculator = {
    'title': 'jQuery Calculator',
    'description': 'A basic calculator built using jQuery and styled via CSS. As this was one of my first coding projects, I actually reasoned out the logic myself using simple logic gates. A creative feature I am most proud of is how the appearance of the operands, operators, answers, and past equations all change as new inputs are selected, depending on their new status in the equation.',
    'description2': '\nFuture iterations will include an improved aesthetic and event listeners for keyboard inputs, plus data validation to protect against SQL injections and other threats.',
    'deployedUrl': 'https://trevorlomba.github.io/calculator/',
    'frontendUrl': 'https://github.com/trevorlomba/calculator',
    'frontendText': 'frontend repo',
    'backendText': '',
    'technologies': ['jQuery', 'bootstrap', 'nodejs', 'javascript', 'html5', 'css'],
    'img': basicCalculatorImg
}
export const myPlaylist = {
    'title': 'My Playlist',
    'description': 'A single-page application with user authentication that interacts with a custom API served by Express. Registered users can create, read, update, and delete songs as part of a database of playlists, which is mapped to rows of a table and displayed on the DOM.',
    'deployedUrl': 'https://trevorlomba.github.io/my-playlist-client/',
    'backendUrl': 'https://github.com/trevorlomba/my-playlist',
    'frontendUrl': 'https://github.com/trevorlomba/my-playlist-client',
    'frontendText': 'frontend repo',
    'backendText': 'backend repo',
    'technologies': ['jQuery', 'express', 'bootstrap', 'nodejs', 'javascript', 'html5', 'css'],
    img: myPlaylistImg
}
export const talkMore = {
	title: 'Talk More',
	description:
		'Built collaboratively with two of my cohort classmates, talkMore is a message board where users can create, read, delete, and update posts which other users can read and comment on. Front-end built via React and React Router, backend built with mongoDB.',
	deployedUrl: 'https://el-1ups.github.io/project-frontend/',
	backendUrl: 'https://github.com/El-1ups/project-backend',
	frontendUrl: 'https://github.com/El-1ups/project-frontend',
	frontendText: 'frontend repo',
	backendText: 'backend repo',
	technologies: ['react', 'javascript', 'css', 'express', 'mongodb', 'mongoose'],
	img: talkMoreImg,
}

export const notionAccess = {
	title: 'Custom Notion Accessibility Toolkit',
	description:
		'This Git repository contains a set of custom files I designed specifically for composers who have lost their ability to use traditional input methods but still want to create, access, and edit their musical compositions in the Notion program. The suite of tools is built to be used in a macOS environment and requires the use of the Accessibility Keyboard Panel Editor and third-party software called Keyboard Maestro',
	deployedUrl: '',
	backendUrl: '',
	frontendUrl: 'https://github.com/trevorlomba/notion-access',
	frontendText: 'github repo',
	backendText: '',
	technologies: ['apple scripts', 'keyboard maestro', 'panel access'],
	img: notionAccessImg,
}
export const gptAccess = {
	title: 'Streamlining Accessibility: An AI-powered Communication App',
	description:
		`Embracing accessible tech with my latest creation: an AI-powered app for individuals with special needs. Utilizing React's user- friendly interface, it introduces an on-screen keyboard and intuitive word suggestions.The standout feature is the ChatGPT integration.Users simply choose keywords and context, and the app delivers grammatically correct sentences.A novel approach towards inclusive communication.`,
	deployedUrl: 'https://trevorlomba.github.io/gpt-access-client/',
	backendUrl: '',
	frontendUrl: 'https://github.com/trevorlomba/gpt-access-client',
	frontendText: 'github repo',
	backendText: '',
	technologies: ['react', 'chatgpt', 'javascript', 'css', 'python'],
	img: gptAccessImg,
}


export const musicPortfolioPrototype = {
	title: 'Music Portfolio Prototype for Creatives',
	description:
		`Unveiling a dynamic music landing page crafted in React, tailored for modern artists. This platform, enriched with component-based architecture, presents vibrant audio/video previews and a polished merchandise display. With an amalgamation of lazy loading and event-driven design, it ensures seamless user experience. Enhanced with React Router and SCSS, it's a testament to contemporary web design and user engagement.`,
	deployedUrl: 'https://trevorlomba.github.io/visualizer/',
	backendUrl: '',
	frontendUrl: '',
	frontendText: '',
	backendText: '',
	technologies: ['react', 'scss', 'javascript', 'event-driven design', 'tunaJS'],
	img: musicPortfolioPrototypeImg,
}