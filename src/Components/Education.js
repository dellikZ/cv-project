import { useState } from "react";





const Education = ({ ed, onClick }) => {



    const [ institution, setInstitution ] = useState('');
    const [ degree, setDegree ] = useState('');
    const [ startYear, setStartYear ] = useState('');
    const [ endYear, setEndYear ] = useState('');
    const [ field, setField ] = useState('');
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
            onClick({institution: institution, degree: degree, startYear: startYear, endYear: endYear, field: field, id: id});
            setIsOpen(false);
            setIsDisabled(false);
            setIsInvalid(false);
            setId(id+1);
        }     
    }

    
   

    return (
        <div className="info">
            <h2>Education</h2>
            {isInvalid && <p style={{color: 'red'}}>Please fill all the required fields accordingly!</p>}
            {!isDisabled && <button onClick={openForm}>Add Education</button>}
            { isOpen && <form onSubmit={(e) => {e.preventDefault()}}>
                <label htmlFor="institution">Institution Name: </label>
                <input required type="text" id="institution" value={institution} onChange={(e) => {setInstitution(e.target.value)}}/>
                
                <label htmlFor="degree">Degree:</label>
                <input required type="text" id="degree" value={degree} onChange={(e) => {setDegree(e.target.value)}}/>
                
                <label htmlFor="startYear">Start Year:</label>
                <input required type="date" id="startYear" value={startYear} onChange={(e) => {setStartYear(e.target.value)}}/>
                
                <label htmlFor="endYear">End Year:</label>
                <input required type="date" id="endYear" value={endYear} onChange={(e) => {setEndYear(e.target.value)}}/>

                <label htmlFor="field">Field:</label>
                <input type="text" id="field" value={field} onChange={(e) => {setField(e.target.value)}} />

                <button onClick={handleForm}>Add</button>
            </form> }
        </div>

    );
}
 
export default Education;