// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps'; 
// import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import{setName, setNumber} from '../../redux/contacts/contactsSlice';

const name = '';
const number = '';



const ContactForm = () => {
  const dispatch = useDispatch();

  const phoneRegExp = /^(\+?[1-9]{1,4}[-\s]?|[0-9]{2,4}[-\s]?)?[0-9]{3,4}[-\s]?[0-9]{3,4}$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values)); 
    actions.resetForm(); // 
  };

  return (
    // 
     <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        required
        type="text"
        helperText="Please enter your name"


      />
      <TextField
        label="Phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        required
        type="number"
        helperText="Please enter your phone number"


      />
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    </form>
  );
};

export default ContactForm;



// import { Button, TextField } from '@mui/material';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateContact } from '../../redux/contacts/contactsOps';

// const ContactForm = ({ contact }) => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState(contact.name);
//   const [number, setNumber] = useState(contact.number);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateContact({ id: contact.id, updatedData: { name, number } }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Ім'я"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         variant="outlined"
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Номер телефону"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//         variant="outlined"
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" type="submit">
//         Зберегти
//       </Button>
//     </form>
//   );
// };

// export default ContactForm;

