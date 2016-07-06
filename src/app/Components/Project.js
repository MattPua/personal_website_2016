import './project.scss';
export default class Project extends React.Component{
  constructor(props){super(props);}
  componentDidMount(){
    $(this.refs.tag).tooltip();
  }

  getTechnologyCards(){
    let cards = [];
    for (let tech of this.props.technologies){
      cards.push(
        <div className='chip'>
          {tech}
        </div>
      );
    }
    return(<div>{cards}</div>);
  }

  getAwards(){
    if (this.props.awards!='')
      return(
        <p className='awards'>
          <i className="fa fa-trophy" aria-hidden="true"></i><span className='award'>{this.props.awards}</span>
        </p>
      );
    else return '';
  }
  getTags(){
    let tags = [];
    for (let tag of this.props.tags){
      tags.push(
        <span ref='tag' className={'tooltipped fa-stack tag tag-'+tag} data-position="top" data-delay="50" data-tooltip={tag + " project"}>
          <i className="fa fa-bookmark fa-stack-1x" aria-hidden="true"></i>
          <i className="fa fa-square-o fa-stack-2x"></i>
        </span>
      );
    }
    return (<div>{tags}</div>);
  }
  render(){
    return(
      <div className='project-container'>
        <div className='project col s12 m4 l3'>
          <div className="card blue-grey darken-1 z-depth-2">
            <div className="card-image">
              <a href={this.props.link} target='_blank'>
                <img src={this.props.img} className='responsive-img'/>
              </a>
              <span className="card-title center">{this.props.title}</span>
            </div>
            <div className="card-content white-text">
              {this.getAwards()}
              <p className=''>{this.props.text}</p>
              {this.getTechnologyCards()}
              {this.getTags()}
              <p>{this.props.date}</p>
            </div>
            <div className="card-action">
              <a href={this.props.link} target="_blank">{this.props.linkTitle}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.defaultProps = {
  title: '',
  text: '',
  link: '',
  linkTitle:'',
  img: '',
  technologies: [],
  date: '',
  awards: '',
  tags: [],
}