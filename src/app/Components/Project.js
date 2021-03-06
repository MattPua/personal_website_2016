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
          <i className="fa fa-star" aria-hidden="true"></i>
          {tech}
        </div>
      );
    }
    return(<div className='tech-chips'><p>Technology Used:</p>{cards}</div>);
  }

  getAwards(){
    if (this.props.awards!='')
      return(
        <p className='awards'>
          <i className="fa fa-trophy" aria-hidden="true"></i><span className='award'><strong>{this.props.awards}</strong></span>
        </p>
      );
    return '';
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
        <div className='project col s12 m6 l3'>
          <div className="card z-depth-2">
            <div className="card-image">
              <a href={this.props.link} target='_blank'>
                <img src={this.props.img} className='responsive-img'/>
              </a>
              <span className="card-title center">{this.props.title}</span>
            </div>
            <div className="card-content white-text">
              <div className='text'>{this.getAwards()}{this.props.text}</div>
              {this.getTechnologyCards()}
              {this.getTags()}
              <div className='datetime right'><i className="fa fa-clock-o" aria-hidden="true"></i><span>{this.props.date}</span></div>
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