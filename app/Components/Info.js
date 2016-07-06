import './info.scss';
export default class Info extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={'info-container ' + this.props.className}>
        <div className='info'>
            Test2
        </div> 
      </div>
    );
  }

}

Info.defaultProps = {
  className: '',
};