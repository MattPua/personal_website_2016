import Project from './project';
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
          {this.getProjects()}
        </div>
      </div>
    );
  }

}
ProjectList.defaultProps = {
  projects: [
    {
      title:'Portfolio Tracker',
      text:'Portfolio tracking web app compatible with mobile to keep track of a portfolio of stocks using the Yahoo Finance Stocks API.',
      link: '#',
      linkTitle:'GitHub Repo',
      img:'/public/images/stockTracker.jpg',
      technologies: ['React','Yahoo API','Materialize','MongoDB'],
      date: 'Summer 2016',
      tags: ['personal']
    },
    {
      title:'GetItDone',
      text:'A ToDo List which focuses on the calendar and getting soon to due things done first.',
      link: 'https://mattpua.github.io/getitdone/',
      linkTitle:'Live Demo',
      img:'/public/images/getitdone.jpg',
      technologies: ['React','Bootstrap','SASS','Firebase'],
      date: 'Summer 2016',
      tags: ['personal']
    },
    {
      title:'Virtual Symphony',
      text:'A VR App made using Aframe and React to bring music and visuals together in VR. Compatible with newer gen mobile phones. Submission for the 2016 UTEST Accelerator Program.',
      link: 'https://flexingdream.github.io/aframe_demo/',
      linkTitle:'Live Demo',
      img:'/public/images/vrdemo.jpg',
      technologies: ['React','A-Frame','Virtual Reality'],
      date: 'Summer 2016',
      tags: ['startup']
    },
    {
      title:'Google Sketchup Projects',
      text:'Collection of 3D models built in Google Sketchup in my free time.',
      link: 'https://3dwarehouse.sketchup.com/by/mattpua',
      linkTitle:'Model Gallery',
      img:'/public/images/sketchup.jpg',
      technologies: ['Sketchup'],
      date: 'Ongoing',
      tags: ['personal']
    },
    {
      title:'Senior Engineering Design Project',
      text:'Virtual reality project done in collaboration with the Centre of Addiction and Mental Health to attempt to assess and treat schizophrenia using virtual reality. Being used in clinical trials.',
      awards: 'Top 10 of 80+ Design Projects',
      link: '',
      linkTitle:'',
      img:'',
      technologies: ['Unity','Oculus Headset','Virtual Reality'],
      date: '2015 - 2016',
      tags: ['undergrad']
    },
    {
      title:'VidulyNoted',
      awards: 'Best Web Dev Hack & Top 10 Finish',
      text:'VidulyNoted is a better way for team members to collaborate together during remote or large meetings by being able to transcribe live video calls. Submission for MHacks 6.',
      link: 'http://devpost.com/software/rebdbully-frontend',
      linkTitle:'DevPost Submission',
      img:'/public/images/vidulynoted.jpg',
      technologies: ['Firebase','jQuery'],
      date: 'Fall 2015',
      tags: ['hackathon']
    },
    {
      title:'KnowRoaming Corporate Portal',
      text:'The Corporate Portal is the business solutions product for KnowRoaming corporate customers. Designed and built the front and back-end during my co-op term at KnowRoaming.',
      link: 'https://corporate.knowroaming.com/',
      linkTitle:'Product Link',
      img:'/public/images/corporateknowroaming.jpg',
      technologies: ['Java','Coffeescript','PHP'],
      date: '2014 - 2015',
      tags: ['work']
    },
    {
      title:'KnowRoaming Retail Site',
      text:'Online retail site allowing customers to buy the KnowRoaming product. Designed and built the front and backend systems during my co-op term at KnowRoaming.',
      link: 'https://www.knowroaming.com/order/order.php',
      linkTitle:'Product Link',
      img:'/public/images/orderknowroaming.jpg',
      technologies: ['Java','Coffeescript','PHP'],
      date: 'Summer 2015',
      tags: ['work']
    },
    {
      title:'Slackbot Gymbro',
      text:'Simple Slack chatbot that encourages members to get active throughout the day.',
      link: 'https://github.com/MattPua/slackbot_gymbro',
      linkTitle:'GitHub Repo',
      img:'/public/images/slackbot.jpg',
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
      img:'/public/images/bitsplease.jpg',
      technologies: ['CoffeeScript','LESS'],
      date: 'Winter 2014',
      tags: ['hackathon']
    },
    {
      title:'InsiteUofT',
      text:'InsiteUofT is a way for peers to connect with each other to help prepare for interviews. Submission for UofT Hacks 2014.',
      link: 'https://insiteuoft.herokuapp.com/',
      linkTitle:'Live Demo',
      img:'/public/images/insiteuoft.jpg',
      technologies: ['Ruby on Rails','SASS'],
      date: 'Spring 2014',
      tags: ['hackathon']
    },

  ],
};
