import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://cors-anywhere.herokuapp.com/course-api.com/react-tabs-project'




function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const {company,title,dates,duties}=jobs[value]

  return (
  <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>

    </div>

   <div className="jobs-center">
<div className="btn-container">
{jobs.map((job,index)=>{
    return(<button key={job.id}  className={`job-btn ${index === value && 'active-btn'}`} onClick={()=>setValue(index) }>{job.company} </button>)})}
</div>
  
<article className="job-info">
  <h3>{title}</h3>
  <h4>{company}</h4>
  <div className="job-dates">
    {dates}
  </div>
  {duties.map((job,index)=>{
    return(
      <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{job}</p>
      </div>
    )
  })}
</article>
</div>
    
 </section>

)
}

export default App
