import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import WorkExperience from "./WorkExperience";
import GeneratedCV from "./GeneratedCV";
import { useState } from "react";


// // const eduArray = [];
// const workArray = [];

const Homepage = () => {

    const [ general, setGeneral ] = useState(null);
    const [ education, setEducation ] = useState(null);
    const [ work, setWork ] = useState(null);
    const [ wasClicked, setWasClicked ] = useState(false);
    const [ eduArray, setEduArray ] = useState([]);
    const [ workArray, setWorkArray ] = useState([]);
   
  
    let data = [];
  
    const handleGeneral = (obj) => {
      setGeneral(obj);
    }
  
    const handleEducation = (obj) => {
      setEducation(obj);
      eduArray.push(obj);
      setEduArray(eduArray);
    }
  
    const handleWork = (obj) => {
      setWork(obj);
      workArray.push(obj);
      setWorkArray(workArray);
    }

    
    data.push(general);
    data.push(education);
    data.push(work);
   
    const gen = data[0];
    const edu = data[1];
    const wk = data[2];
    
    const handleDeleteEdu = (id) => {
        const newEdu = eduArray.filter(item => item.id !== id)
        setEduArray(newEdu);
    }

    const handleDeleteWork = (id) => {
        const newWork = workArray.filter(item => item.id !== id);
        setWorkArray(newWork);
    }

    console.log(window.screen.width);

    
    return (
        <div className="homepage">
            <h1>CV Maker</h1>
            <p style={{padding: '20px', color: '#fff'}}>Fill all the section in order to generate your CV.</p>
            <GeneralInformation general={general} onClick={handleGeneral}/>
            <Education ed={education} onClick={handleEducation}/>
            <WorkExperience work={work} onClick={handleWork} />
            { (gen && edu && wk) && <button onClick={() => {setWasClicked(true)}}>Preview CV</button> }
            { wasClicked && <GeneratedCV edu={edu} gen={gen} wk={wk} workArray={workArray} eduArray={eduArray} handleDeleteEdu={handleDeleteEdu} handleDeleteWork={handleDeleteWork}/>}

            
        </div>
    );
}
 
export default Homepage;