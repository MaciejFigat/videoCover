const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
}
const pageVariantsLogo = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
  },
}
const pageTransition = {
  type: 'tween',
  duration: 1,
}
const pageTransitionLogo = {
  type: 'tween',
  duration: 1.2,
}

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const smoothVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}

export {
  pageTransitionLogo,
  pageTransition,
  pageVariantsLogo,
  pageVariants,
  smoothVariants,
  transition,
}
