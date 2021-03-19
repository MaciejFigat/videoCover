## React tutorial/sending an email/EmailJS intermediary - simple approach 
1. Create a form component
2. Set up useState hooks for your inputs in the form 
Like so: 
```
 const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')
``` 
3. Include function updating the relevant state in onChange event in inputs of your form.
Just like so, for name:
```
<input
              className='contact_field_content'
              type='text'
              value={name}
              placeholder='your name'
              onChange={(e) => setName(e.target.value)}
            />             
```
4. EmailJS install and import
* npm i emailjs-com
* import emailjs from 'emailjs-com'
5. Set up a file called .env in the root of the project. I use them to hide the variables from my EmailJS account. While at it, check if we have .env included in .gitignore file. If not - we should add it, to not expose the variables in our remote repository. 
**Warning**: Viablility of this solution is dependant on your version of your react-scripts and actually using React - since we are basing the whole tutorial on the fact that React uses .env under the hood. 

6. Set up an account at EmailJS - https://www.emailjs.com/. Set your service and template up and find User ID, Service ID, Template ID. User ID is in the integration page in the EmailJS dashboard.
6. Define those ID's as environment variables in .env file. Custom environment variables must be named in this convention ie. starting with REACT_APP_.
Like so:
``` REACT_APP_MY_EMAILJS_ID = user_123
 REACT_APP_MY_SERVICE_ID = service_123
 REACT_APP_MY_TEMPLATE_ID = template_123 
```

7.  Environment variables, we just set up, will be defined on process.env. 
For example: process.env.REACT_APP_MY_EMAILJS_ID will expose REACT_APP_MY_EMAILJS_ID environmental variable.
8. In the Form component we need to set up 3 things: 
* way of accessing environmental variables that will be used in the emailJS function:

const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID
* template for our email, for example:
const templateParams = {
    from_name: name,
    to_name: 'Maciej',
    message: formMessage,
    reply_to: email,
  }
* function to send the email

``` 
emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
```
9. When code above will be executed, in my case in a onClick event in a button. 
There should be a message in the console informing about the result.  
10. Reminder - Changing any environment variables will require you to restart the development server if it is running. 
11. For more information about environmental variables in React: https://create-react-app.dev/docs/adding-custom-environment-variables/

12. For more information about emailjs-com read docs at: https://www.npmjs.com/package/emailjs-com

```  
const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID

  const templateParams = {
    from_name: name,
    to_name: 'Maciej',
    message: formMessage,
    reply_to: email,
  }

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
  
```