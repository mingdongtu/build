import React,{component} from 'react'
import reactDOM from 'react-demo'

class Demo extends Component{
        render(){
               return(
                     <div className="box"> {this.props.text}</div>
               )
        }
}

reactDOM.render(
    <Demo text='This is a text' />,
    document.querySelector('.container')
)