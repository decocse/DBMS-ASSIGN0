import React,{Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
        firstnumber:'',
        secondnumber:'',
        result:''
    }
}
    render()
    {
        const {firstnumber,secondnumber,result} = this.state;
        return(
            <form>
                <div>
                    <label>First Number</label>
                <input type="text" value={firstnumber} onChange={(e)=>this.setState({firstnumber:e.target.value})}/>
                </div>
                <div>
                    <label>Second Number</label>
                <input type="text" value={secondnumber} onChange={(e)=>this.setState({secondnumber:e.target.value})}/>
                </div>
               
            
                <button onClick={()=>this.setState({result:parseInt(firstnumber)+parseInt(secondnumber)})}>Add</button>
                <button onClick={()=>this.setState({result:parseInt(firstnumber)*parseInt(secondnumber)})}>Multiply</button>
                <button onClick={()=>this.setState({result:parseInt(firstnumber)-parseInt(secondnumber)})}>Substract</button>
                <h1>{result}</h1>
               
            </form>
           
            

        )
    }

  }
  export default Form