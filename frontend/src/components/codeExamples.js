const emailJSFunctionExample = `
emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
  function (response) {
    console.log('SUCCESS!', response.status, response.text)
  },
  function (error) {
    console.log('FAILED...', error)
  }
)
`
const stateExample = `const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [formMessage, setFormMessage] = useState('')`

const inputExample = `<input
className='contact_field_content'
type='text'
value={name}
placeholder='your name'
onChange={(e) => setName(e.target.value)}
/> `

const envExample = `REACT_APP_MY_EMAILJS_ID = user_123
REACT_APP_MY_SERVICE_ID = service_123
REACT_APP_MY_TEMPLATE_ID = template_123 `

const templateParamsExample = `const templateParams = {
  from_name: name,
  to_name: 'Your name',
  message: formMessage,
  reply_to: email,
}`

const envVariablesAccess = `const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID`

export {
  emailJSFunctionExample,
  stateExample,
  inputExample,
  envExample,
  templateParamsExample,
  envVariablesAccess,
}
