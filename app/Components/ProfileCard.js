import SocialMediaIcons from './SocialMediaIcons';
export default class ProfileCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col s12 m8 offset-m2 l8 offset-l2">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s12 m4">
              <img src={this.props.profilePicture} alt="" className="circle responsive-img"/> 
            </div>
            <div className="col s12 m8">
              <div className="black-text flow-text">Engineering Graduate '16</div>
              <div className='black-text flow-text'>Programmer</div>
              <div className='black-text flow-text'>Noodle Enthusiast</div>
            </div>
          </div>
        </div>
      </div>
            
    );
  }
}

ProfileCard.defaultProps = {
  profilePicture: '/public/images/profile.jpg',
  className: '',
};