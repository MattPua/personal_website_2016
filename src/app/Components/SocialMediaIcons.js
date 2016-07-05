import './SocialMediaIcons.scss';
export default class SocialMediaIcons extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='social-media-icons'>
        <a className="grey-text text-lighten-4 right" target='_blank' href="https://github.com/MattPua">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-github-alt fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a className="grey-text text-lighten-4 right" target='_blank' href="mailto:mattpua49@gmail.com">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a className="grey-text text-lighten-4 right" target='_blank' href="https://ca.linkedin.com/in/matthewpua">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a className="grey-text text-lighten-4 right" target='_blank' href="https://www.instagram.com/yo_puaa/?hl=en">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </div>
    );
  }
}