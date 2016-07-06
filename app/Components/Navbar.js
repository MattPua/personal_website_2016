import './navbar.scss';
export default class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  onClick(event){
    event.preventDefault();
    this.props.signout();
  }
  render(){
    return(
      <nav className='navbar-container row'>
        <div className={"nav-wrapper " + this.props.className}>
          <a href="#!" className="brand-logo center">Portfolio</a>
        </div>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  className: '',
  username: null,
};