import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Feedback from 'react-bootstrap/Feedback';
import InputGroup from 'react-bootstrap/InputGroup';
import {useInput} from '../components/input-hook'



function FormContact ()  {

   const [validated, setValidated] = React.useState(false);
   const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
   const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
   const { value:phone, bind:bindPhone, reset:resetPhone } = useInput('');
   const { value:message, bind:bindMessage, reset:resetMessage } = useInput('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("The form is not valid")
    }else{
       console.log("The form is valid")
       alert(` ${firstName}  ${phone} ${email} ${message}Our team will contact you shortly!!!`);
       //setValidated(true);

    }

     setValidated(true);
   //   resetFirstName();
   //   resetEmail();
   //   resetPhone();
   //   resetMessage();

    
  };

    return(
       <Form className="formcontact" noValidate validated={validated} onSubmit={handleSubmit}>
        <div >Contact Us</div>
       <Form.Group  controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="First & Last Name"
            {...bindFirstName} 
          />
          <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group  controlId="validationCustom02">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            {...bindEmail} 
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>

         <Form.Group controlId="validationCustom03">
          <Form.Control
            required
            type="phone"
            placeholder="Telephone"
            {...bindPhone} 
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter your message</Form.Label>
          <Form.Control as="textarea" rows="3" required {...bindMessage} />
       </Form.Group>
       <Button type="submit" variant="dark">Send</Button>
    </Form>
    );

}

export default FormContact;