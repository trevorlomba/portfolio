import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './projects.scss'

const Project = (props) => {
	const openClientRepo = () => {
		window.open(props.project.frontendUrl)
	}
	const openBackendRepo = () => {
		window.open(props.project.backendUrl)
	}
	const openDeployed = () => {
		window.open(props.project.deployedUrl)
	}
	const [readMore, setReadMore] = useState(false)

  const checkTechs = props.experience.map((ele) => (ele.status ? ele.name : ''))

  const contains = props.project.technologies.some(ele => {
    return checkTechs.includes(ele)
  })

	return (
		<>
			<div className={contains ? 'show' : 'hide'}>
				<div className='container'>
					<div className='project-wrapper'>
						<div className='project-row'>
							<div className='project-column title'>{props.project.title}</div>
						</div>
						<div className='project-row'>
							<div className='project-column'>
								<a
									href={props.project.deployedUrl}
									target='_blank'
									rel='noreferrer'>
									<div className='project-screenshot'>
										<img src={props.project.img} alt='project screenshot'></img>
									</div>
								</a>
							</div>
							<div className='technologies'>
								technologies:{' '}
								{props.project.technologies.map((ele) => ele).join(', ')}
							</div>
							{/* <div className='technologies'>
								technologies: {contains ? 'true' : 'false'}
							</div> */}
						</div>
						{/* <div className='project-column'>
						{' '} */}
						<div className='project-description'>
							<div className='project-text'> {props.project.description}</div>
							<div className='project-text'>
								{readMore ? props.project.description2 : ''}
							</div>
							{/* </div> */}
							{/* <div className='column'>
      <div className='orange-column'>
      Some Text in Column Two
      </div>
    </div> */}
						</div>
						{/* <div>{props.experience['html5'] ? 'true' : 'false'}</div> */}
						<div className='readMore' onClick={() => setReadMore(!readMore)}>
							{!props.project.description2
								? ''
								: !readMore
								? 'read more...'
								: '...read less'}
						</div>
						<a
							href={props.project.deployedUrl}
							rel='noopener noreferrer'
							target='_blank'
							className='deploy-link'>
							deployed app
						</a>
						<div class='project_links'>
							<a
								href={props.project.frontendUrl}
								rel='noopener noreferrer'
								className='frontend-link'
								target='_blank'>
								{props.project.frontendText}
							</a>
							<a
								href={props.project.backendUrl}
								rel='noopener noreferrer'
								target='_blank'
								className='backend-link'>
								{props.project.backendText}
							</a>
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
				</div>
			</div>
		</>
	)
}

export default Project
