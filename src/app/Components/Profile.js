import './profile.scss';
export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={'profile-container ' + this.props.className}>
        <div className='profile'>
          <div className='row'>
          </div>
        </div> 
      </div>
    );
  }

}

Profile.defaultProps = {
  className: '',
};