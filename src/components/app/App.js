import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [
        {id:123,name: 'Alvin' , phone: '89065432678', career: 'IT', email: 'rewwert@gmail.com', meeting:'20.12 - 12:00'},
        {id:1234,name: 'Mark' , phone: '89265674444', career: 'doctor', email: '788788t@gmail.com', meeting:'26.12 - 18:43'},
        {id:1235,name: 'Dave' , phone: '89674567666', career: 'meneg', email: '887676rt@gmail.com', meeting:''},
        {id:1236,name: 'Rina' , phone: '84956677899', career: 'sport', email: 'ruuuyttrt@gmail.com', meeting:''},
      ]
      
    }
    
  }
  onValueChange = (id, value) => {
 
this.setState(({data}) => {
const item = data.find(item=> item.id === id)
const newItem = {...item,meeting:value}
const index = data.index(item)
const newData = [...data.slice(0,index), newItem, ...data.slice(index + 1, data.length)]
return{
  data:newData
}
})
  }
  render(){
    const {data} = this.state
    const personList = data.map(item => <Person {...item} key={item.id} onValueChange={(id,value) => this.onValueChange(id,value)}/>
    )
  
    return (
      
       <table className='responsive-table'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Phon</th>
                <th>Career</th>
                <th>Email</th>
                <th>Meeting</th>
            </tr>
          </thead>
  
          <tbody>
      
        {personList}
          
          </tbody>
        </table>
    
    );
  }
  
}

export default App;
