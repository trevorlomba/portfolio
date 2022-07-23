import {
	DiJavascript1,
	DiBootstrap,
	DiHtml5,
	DiCss3,
	DiNodejs,
	DiMongodb,
	DiPostgresql,
	DiPython,
	DiReact,
} from 'react-icons/di'
import './ExperienceBadge.scss'

const badges = [
    <DiBootstrap/>,
]
// const badges = [
//     { 'javascript': <DiBootstrap></DiBootstrap> },
//     { 'bootstrap': DiBootstrap },
//     { 'html5': DiHtml5 },
//     { 'css3': DiCss3 },
//     { 'nodejs': DiNodejs },
//     { 'mongodb': DiMongodb },
//     { 'postgresql': DiPostgresql },
//     { 'python': DiPython },
//     { 'react': DiReact },
// ]

const ExperienceBadge = (props) => (
	// <div className={props.badge ? 'on' : 'off'}>
		// {/* <props.icon /> */}
    <div>
        {props.name}
    </div>
	// {/* </div> */}
)

export default ExperienceBadge