import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Banner from './Components/Banner';
import ProjectList from './Components/ProjectList';
import Externals from './Componenents/Externals';
import './app.scss';
// Note: need this for materialize other wise won't work properly
var $ = window.jQuery = require('jquery');
require('materialize-css/sass/materialize.scss');
require('materialize-css/dist/js/materialize');
require('font-awesome/scss/font-awesome.scss');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return (
      <div className='content-container'>
        <header>
        </header>
        <main className='row'>
          <Banner/>
          <Profile/>
          <ProjectList/>
          <Externals/>
        </main>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));