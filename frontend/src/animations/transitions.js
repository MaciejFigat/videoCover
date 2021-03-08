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

export { pageTransitionLogo, pageTransition, pageVariantsLogo, pageVariants }
