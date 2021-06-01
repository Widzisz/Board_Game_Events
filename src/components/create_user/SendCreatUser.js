// import React, { useState } from 'react';
// import db from '../../firebase';

// const SendCreateUser = event => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const id = Math.round(Math.random() * 10000000).toString();
//     const eventUser = {
//         id,
//         name: name,
//         email: email,
//         password: password,
//     };
//     db.collection('new-user').doc(id).set(eventUser);
// };

// export default SendCreateUser;
