import Project from './project';
const IMAGE_LOCATION = './public/images/';
export default class ProjectList extends React.Component{

  constructor(props){
    super(props);
  }

  getProjects(){
    let projects = [];
    for (let project of this.props.projects){
      projects.push(
        <Project {...project}/>
      );
    }

    return projects;
  }

  render(){
    return(
      <div className='project-list-container col s12'>
        <div className='project-list row'>
          <h3 className='center white-text'>My Projects</h3>
          {this.getProjects()}
        </div>
      </div>
    );
  }

}
ProjectList.defaultProps = {
  projects: [
    {
      title:'Personal Portfolio',
      text:'My updated porfolio website.',
      link: 'http://www.matthewpua.ca',
      linkTitle:'Website',
      img:IMAGE_LOCATION+'portfolio.jpg',
      technologies: ['React','Materialize','Digital Ocean'],
      date: 'Summer 2016',
      tags: ['personal']
    },
    {
      title:'Portfolio Tracker',
      text:'Portfolio tracking web app compatible with mobile to keep track of a portfolio of stocks using the Yahoo Finance Stocks API.',
      link: 'http://matthewpua.ca/stockTracker/',
      linkTitle:'Live Demo',
      img:IMAGE_LOCATION+'stockTracker.jpg',
      technologies: ['React','Yahoo API','Materialize','MongoDB'],
      date: 'Summer 2016',
      tags: ['personal']
    },
    {
      title:'GetItDone',
      text:'A ToDo List which focuses on the calendar and getting soon to due things done first.',
      link: 'https://mattpua.github.io/getitdone/',
      linkTitle:'Live Demo',
      img:IMAGE_LOCATION+'getitdone.jpg',
      technologies: ['React','Bootstrap','SASS','Firebase'],
      date: 'Summer 2016',
      tags: ['personal']
    },
    {
      title:'Virtual Symphony',
      text:'A VR App made using Aframe and React to bring music and visuals together in VR. Compatible with newer gen mobile phones. Submission for the 2016 UTEST Accelerator Program.',
      link: 'https://flexingdream.github.io/aframe_demo/',
      linkTitle:'Live Demo',
      img:IMAGE_LOCATION+'vrdemo.jpg',
      technologies: ['React','A-Frame','Virtual Reality'],
      date: 'Summer 2016',
      tags: ['startup']
    },
    {
      title:'Google Sketchup Projects',
      text:'Collection of 3D models built in Google Sketchup in my free time.',
      link: 'https://3dwarehouse.sketchup.com/by/mattpua',
      linkTitle:'Model Gallery',
      img:IMAGE_LOCATION+'sketchup.jpg',
      technologies: ['Sketchup'],
      date: 'Ongoing',
      tags: ['personal']
    },
    {
      title:'Final Year Design Project',
      text:'VR Project done in collaboration with the Centre of Addiction and Mental Health. Attempts to assess and treat schizophrenia using virtual reality. Being used in clinical trials by CAMH.',
      awards: 'Top 10 of 80+ Design Projects',
      link: '',
      linkTitle:'',
      img:IMAGE_LOCATION+'capstone.jpg',
      technologies: ['Unity','Oculus Headset','Virtual Reality'],
      date: '2015 - 2016',
      tags: ['undergrad']
    },
    {
      title:'Hippo',
      text:'Android App to help those in crisis situation. Submission for UofT Hacks 2016.',
      link: 'https://github.com/re-mint/uofthacks2016',
      linkTitle:'GitHub',
      img:IMAGE_LOCATION+'hippo.jpg',
      technologies: ['Android','Java'],
      date: 'Winter 2016',
      tags: ['hackathon']
    },
    {
      title:'VidulyNoted',
      awards: 'Best Web Dev Hack & Top 10 Finish',
      text:'VidulyNoted is a better way for team members to collaborate together during remote or large meetings by being able to transcribe live video calls. Submission for MHacks 6.',
      link: 'http://devpost.com/software/rebdbully-frontend',
      linkTitle:'DevPost Submission',
      img:IMAGE_LOCATION+'vidulynoted.jpg',
      technologies: ['Firebase','jQuery'],
      date: 'Fall 2015',
      tags: ['hackathon']
    },
    {
      title:'KnowRoaming Corporate Portal',
      text:'The Corporate Portal is the business solutions product for KnowRoaming corporate customers. Designed and built the front and back-end during my co-op term at KnowRoaming.',
      link: 'https://corporate.knowroaming.com/',
      linkTitle:'Product Link',
      img:IMAGE_LOCATION+'corporateknowroaming.jpg',
      technologies: ['Coffeescript','PHP','Stripe','SASS'],
      date: '2014 - 2015',
      tags: ['work']
    },
    {
      title:'KnowRoaming Retail Site',
      text:'Online retail site allowing customers to buy the KnowRoaming product. Designed and built the front and backend systems during my co-op term at KnowRoaming.',
      link: 'https://www.knowroaming.com/order/order.php',
      linkTitle:'Product Link',
      img:IMAGE_LOCATION+'orderknowroaming.jpg',
      technologies: ['Stripe','PayPal','Coffeescript','PHP'],
      date: 'Summer 2015',
      tags: ['work']
    },
    {
      title:'Slackbot Gymbro',
      text:'Simple Slack chatbot that encourages members to get active throughout the day.',
      link: 'https://github.com/MattPua/slackbot_gymbro',
      linkTitle:'GitHub Repo',
      img:IMAGE_LOCATION+'slackbot.jpg',
      technologies: ['Python','Slack API'],
      date: 'Summer 2015',
      tags: ['personal']
    },
    {
      title:'BitsPlease',
      awards: '1st Place Apprentice Hacker',
      text:"Children's learning game in HTML for the Koding Global Hackathon 2014.",
      link: 'https://www.koding.com/blog/2014/12/winning-hackers/',
      linkTitle:'Koding Blog Post',
      img:IMAGE_LOCATION+'bitsplease.jpg',
      technologies: ['CoffeeScript','LESS'],
      date: 'Winter 2014',
      tags: ['hackathon']
    },
    {
      title:'InsiteUofT',
      text:'InsiteUofT is a way for peers to connect with each other to help prepare for interviews. Submission for UofT Hacks 2014.',
      link: 'https://insiteuoft.herokuapp.com/',
      linkTitle:'Live Demo',
      img:IMAGE_LOCATION+'insiteuoft.jpg',
      technologies: ['Ruby on Rails','SASS'],
      date: 'Spring 2014',
      tags: ['hackathon']
    },

  ],
};
