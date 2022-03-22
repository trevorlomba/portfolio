import React from 'react'
import { NavLink } from 'react-router-dom'
import './projects.scss'


const Project = ( props ) => {
  const openClientRepo = () => {
    window.open(props.project.frontendUrl);
  };
  const openBackendRepo = () => {
    window.open(props.project.backendUrl);
  };
  const openDeployed = () => {
    window.open(props.project.deployedUrl);
  };
  return (
    <>
      <div className='project-wrapper'>
      <div className='project-row'>
      <div className="project-column title">{ props.project.title }</div>
      </div>
        <div className='project-row'>
    <div className='project-column'> <img src={ props.project.img }></img>
    </div>
          <div className='project-column'> <div className="project-description"><div className='project-text'> { props.project.description }
          </div> <div className="technologies">technologies: {props.project.technologies}</div></div>
    </div>
    {/* <div className='column'>
      <div className='orange-column'>
      Some Text in Column Two
      </div>
    </div> */}
    </div>
    <div>
      <a href={props.project.deployedUrl} rel="noopener noreferrer" target="_blank" className="deploy-link">deployed app</a>
      </div>
    <div>
        <a href={props.project.frontendUrl} rel="noopener noreferrer" className="repo-link"target="_blank">frontend repo</a>
        <a href={props.project.backendUrl} rel="noopener noreferrer" target="_blank" className="repo-link">backend repo</a>
      </div>
        <div>
        {/* <NavLink to={props.projects.frontendUrl} className='nav-link'>Change Password</NavLink> */}
          {/* <form>
        <button onClick={openDeployed()}>DEPLOYED CLIENT</button>
        <button onClick={openClientRepo()}>CLIENT REPO</button>
        <button onClick={openBackendRepo()}>BACKEND REPO</button>
        </form> */}

          </div> 
          </div>
    </>
    )
}

export default Project