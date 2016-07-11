import './profile.scss';
import SocialMediaIcons from './SocialMediaIcons';
export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={'profile-container ' + this.props.className}>
        <div className='profile'>
          <div className='row center'>
            <SocialMediaIcons/>
          </div>
        </div> 
      </div>
    );
  }

}

Profile.defaultProps = {
  className: '',
};