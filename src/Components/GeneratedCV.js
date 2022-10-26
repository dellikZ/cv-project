import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useRef } from 'react';
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';


const GeneratedCV = ({ gen, edu, wk, eduArray, workArray, handleDeleteEdu, handleDeleteWork }) => {

    const cvPDF = useRef();

    const generatePDF = useReactToPrint({
        content: () => cvPDF.current,
        documentTitle: 'generated',
        onAfterPrint: () => console.log('print successfull')
    })
  

    const [ isActive, setIsActive ]= useState(true);

    const handleActive = () => {
        setIsActive(current => !current);
    }


    return (
        <div className="page">
            <h2 className='bigger'>Your CV was succesfully generated!</h2>
            {(window.screen.width > 980) && 
                <div className="cv" ref={cvPDF}>
                <div className="left-cv">
                    <div className="upper-left">
                        <div className="name">
                            <h3>{gen.firstName}</h3>
                            <h3>{gen.lastName}</h3>
                        </div>
                        
                        <div className="img-container">
                            <img src={gen.photo} alt="avatar" />
                        </div>

                        <div className="about-gen">
                            <h4>About me:</h4>
                            <p>{gen.aboutMe}</p>
                        </div>
                    
                    </div>
                    <div className="contact-cv">
                        <h4>Contact me:</h4>
                        <p><MdEmail /> {gen.email}</p>
                        <p><AiFillPhone /> {gen.phone}</p>
                        <p><FaMapMarkerAlt /> {gen.address}</p>
                    </div>
                </div>
                <div className="right-cv">
                    <div className="work-cv">
                        <h5>Work Experience</h5>
                        {workArray.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="item-header">
                                    <h2>{item.company}</h2>
                                    <button className={`del ${isActive ? "display":"none"}`} onClick={() => {handleDeleteWork(item.id)}}>X</button>
                                    
                                </div>
                                <p>{item.startYear} to {item.endYear}</p>
                                <p>Position: {item.role}</p>
                                <p>Short Description:</p>
                                <div className="desc">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="education-cv">
                        <h5>Education</h5>
                        {eduArray.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="item-header">
                                    <h2>{item.institution}</h2>
                                    <button className='del' onClick={() => {handleDeleteEdu(item.id)}}>X</button>
                                </div>
                                <p>{item.startYear} to {item.endYear}</p>
                                <p>Degree: {item.degree}</p>
                                <p>Field of Study: {item.field}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            }
            <div className="buttons-cv">
                <button className="fixed" onClick={() => {setIsActive(true); generatePDF()}}>Download PDF</button>
  
            </div>
        </div>
        
    );
}
 
export default GeneratedCV;