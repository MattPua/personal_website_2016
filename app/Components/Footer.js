import './Footer.scss';
import SocialMediaIcons from './SocialMediaIcons';
export default class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            Made by <strong>Matt Pua</strong>
            <SocialMediaIcons/>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.defaultProps = {
  className: '',
};