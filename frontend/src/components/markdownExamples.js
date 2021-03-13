const jsxOne = `
const emailJSSendHandler = (e) => {
  e.preventDefault()
  dispatch(messageChange({ name, email, message: formMessage }))
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text)
    },
    function (error) {
      console.log('FAILED...', error)
    }
  )
}
`

const markdown = `
${jsxOne}`

export default markdown
