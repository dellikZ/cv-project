import { useState } from 'react';
import NoAvatar from './../images/noavatar.jpeg';


const GeneralInformation = ({ general, onClick }) => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ aboutMe, setAboutMe ] = useState('');
    const [ photo, setPhoto ] = useState('');
    const [ isOpen, setIsOpen] = useState(false);
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ isInvalid, setIsInvalid ] = useState(false);

    
    const openForm = () => {
        setIsOpen(true);
        setIsDisabled(true);
    };

    if(photo === '') {
        setPhoto(NoAvatar);
    }

    const handleForm = () => {
        console.log(photo);
        const inputsVal = [];
        document.querySelectorAll('input').forEach((inp) => inputsVal.push(inp.checkValidity()));
        

        if(inputsVal.includes(false)) {
            setIsInvalid(true);
        } else {
            onClick({firstName: firstName, lastName:lastName, email: email, phone: phone, address: address, aboutMe: aboutMe, photo: photo});
            setIsOpen(false);
            setIsDisabled(false);
            setIsInvalid(false);
        }
    }

    return (
        <div className="info">
            <h2>General Information</h2>
            {!isDisabled && <button onClick={openForm}>Add or Edit General Info</button>}
            {isInvalid && <p style={{color: 'red'}}>Please fill all the required fields accordingly!</p>}
            { isOpen && <form onSubmit={(e) => {e.preventDefault();}}>
                <div className="big-info">
                    
                    <div className="left">
                        <label htmlFor="firstName">First Name:</label>
                        <input required type="text" id="firstName" value = {firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                        
                        <label htmlFor="lastName">Last Name:</label>
                        <input required type="text" id="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                    </div>

                    <div className="right">
                        <label htmlFor="email">Email:</label>
                        <input required type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        
                        <label htmlFor="phone">Phone Number:</label>
                        <input required type="tel" max={12} id="phone" pattern="[0-9]{4}[0-9]{3}[0-9]{3}"  name="usrtel"  placeholder="0769666666" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                    </div>
                </div>
                
                <label htmlFor="address">Address:</label>
                <input required type="text" id="address" value={address} onChange={(e) => {setAddress(e.target.value)}}/>

                <label htmlFor="aboutMe">About me:</label>
                <textarea name="aboutMe" id="aboutMe" cols="30" rows="10" maxLength={200} placeholder="200 characters maximum"value={aboutMe} onChange={(e) => {setAboutMe(e.target.value)}}></textarea>

                <label htmlFor="photo" id="photo-select">Pick a photo
                    <input type="file" accept='image/*' id="photo" onChange={(e) => {setPhoto(URL.createObjectURL(e.target.files[0]));}} />
                    <span></span>
                </label>
                

                <button onClick={handleForm}>Add Info</button>
            </form> }
        </div>
    );
}
 
export default GeneralInformation;