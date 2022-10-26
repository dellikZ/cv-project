import { useState } from "react";

const WorkExperience = ({ work, onClick }) => {

    const [ company, setCompany ] = useState('');
    const [ role, setRole ] = useState('');
    const [ startYear, setStartYear ] = useState('');
    const [ endYear, setEndYear ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ isOpen, setIsOpen] = useState(false);
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ isInvalid, setIsInvalid ] = useState(false);
    const [ id, setId ] = useState(0);

    
    const openForm = () => {
        setIsOpen(true);
        setIsDisabled(true);
    };

    const handleForm = () => {
        const inputsVal = [];
        document.querySelectorAll('input').forEach((inp) => inputsVal.push(inp.checkValidity()));

         if(inputsVal.includes(false)) {
            setIsInvalid(true);
        } else {
            onClick({company: company, role: role, startYear: startYear, endYear: endYear, description: description, id: id});
            setIsOpen(false);
            setIsDisabled(false);
            setIsInvalid(false);
            setId(id+1);
        }     
    }

    return (
        <div className="info">
            <h2>Work Experience</h2>
            {!isDisabled && <button onClick={openForm}>Add Education</button>}
            {isInvalid && <p style={{color: 'red'}}>Please fill all the required fields accordingly!</p>}
            { isOpen && <form onSubmit={(e) => {e.preventDefault();}}>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" value={company} onChange={(e) => {setCompany(e.target.value)}}/>
            
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" value={role} onChange={(e) => {setRole(e.target.value)}}/>
            
                <label htmlFor="startYear">From:</label>
                <input type="date" id="startYear" value={startYear} onChange={(e) => {setStartYear(e.target.value)}}/>
                
                <label htmlFor="endYear">To:</label>
                <input type="date" id="endYear" value={endYear} onChange={(e) => setEndYear(e.target.value)}/>
                
                <label htmlFor="description">Short Description:</label>
                <textarea name="description" id="description" cols="30" rows="10" maxLength={200} placeholder="200 characters maximum" onChange={(e) => {setDescription(e.target.value)}}></textarea>

                <button onClick={handleForm}>Add</button>
            </form> }
        </div>
    );
}
 
export default WorkExperience;