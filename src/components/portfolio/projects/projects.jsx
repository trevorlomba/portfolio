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
						</div>
						<div className='project-description'>
							<div className='project-text'> {props.project.description}</div>
							<div className='project-text'>
								{readMore ? `\n${props.project.description2}` : ''}
							</div>
						</div>
						<div
							className='readMore'
							onClick={
								props.project.description2
									? () => setReadMore(!readMore)
									: undefined
							}
						>
							{props.project.description2 && (
								readMore ? '...read less' : 'read more...'
							)}
						</div>

						{props.project.deployedUrl ? (
							<a
								href={props.project.deployedUrl}
								rel='noopener noreferrer'
								target='_blank'
								className='deploy-link'>
								deployed app
							</a>
						) : props.project.frontendUrl ? (
							<a
								href={props.project.frontendUrl}
								rel='noopener noreferrer'
								className='deploy-link'
								target='_blank'>
								{props.project.frontendText}
							</a>
						) : props.project.backendText ? (
							<a
								href={props.project.backendUrl}
								rel='noopener noreferrer'
								target='_blank'
								className='backend-link'>
								{props.project.backendText}
							</a>
						) : (
							''
						)}
						<div class='project_links'>
							{!props.project.deployedUrl ? (
								''
							) : (
								<a
									href={props.project.frontendUrl}
									rel='noopener noreferrer'
									className='frontend-link'
									target='_blank'>
									{props.project.frontendText}
								</a>
							)}
							{!props.project.deployedUrl && !props.project.frontendText ? (
								''
							) : (
								<a
									href={props.project.backendUrl}
									rel='noopener noreferrer'
									target='_blank'
									className='backend-link'>
									{props.project.backendText}
								</a>
							)}
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Project
