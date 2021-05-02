import tomato from '../assets/svg/tomato.svg'
import trainer from '../assets/svg/trainer.svg'
import install from '../assets/svg/install.svg'

const projectsData = [
  {
    id: 1,
    picture: tomato,
    color: '#ff6347',
    title: 'Pomodoro timer',
    description:
      'Full stack application built with React, Redux, Node, Express & MongoDB. It enables users to store their training routines on a server and utilize the build in timer.',
    link: 'https://kutimer.herokuapp.com/',
    githubLink: 'https://github.com/MaciejFigat/pomodoro',
  },

  {
    id: 2,
    picture: install,
    color: '#FEBE10',
    title: 'Installations company',
    description:
      'SPA in React, one of my first made. I think I refactored the code at least a thousand times, with little to no difference.',
    link: 'https://batex.netlify.app/',
    githubLink: 'https://github.com/MaciejFigat/SinglePageA_React',
  },
  {
    id: 3,
    picture: trainer,
    color: '#32de84',
    title: 'Personal trainer homepage',
    description: 'It is a personal webpage for a local personal trainer',
    link: 'https://ninahome.netlify.app/',
    githubLink: 'https://github.com/MaciejFigat/ninaHome',
  },
]

export { projectsData }
