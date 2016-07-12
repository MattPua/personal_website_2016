export default class Externals extends React.Component{

  getGoogleAnalytics(){
    return(
    );
  }
  render(){
    return(
      <div className='externals'>
        <script>{this.getGoogleAnalytics()}</script>
      </div>
    );
  }
}