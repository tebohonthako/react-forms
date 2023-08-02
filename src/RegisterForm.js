//  C O N T R O L L E D     I N P U T S 
 import React, {useState} from 'react';
 
 function RegisterForm () {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    return (
        <div>
            <form>
                <label>Name * </label>
                <input type="text" required placeholder="First Name" value={name}></input>
                <input type="text" required placeholder="Last Name" value={lastname}></input>

                <label>Username * </label>
                <input type="text" required value={Username}></input>

                <label>Email* </label>
                <input type="text" required value={email}></input>

                <label>Phone </label>
                <select>
                    <option value="+27"></option>
                    <option value="+263" ></option>
                    <option value="+1"></option>
                </select>

                <label>Password </label>
                <input type="text" required value={password}></input>

                <label>Bio</label>
                <textarea required value={bio}></textarea>

                <button>Submit</button>
            </form>
        </div>
    )
 }
 export default RegisterForm;