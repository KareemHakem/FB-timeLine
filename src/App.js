
import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'



class App extends React.Component {

    // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)

    this.state ={
      name : "" ,
      email : "" ,
      password : "",
      loading : false,
      loggedIn : false,
      number : 1
    }
  }

  handleName (e) {
    this.setState({
      name : e.target.value
    })
  }

  handleEmail (e) {
    this.setState({
      email : e.target.value
    })
  }
  handlePassword (e) {
    this.setState({
      password : e.target.value
    })
  }



  handleSubmit (e) {
   
    e.preventDefault()
    console.log(
      this.state.name,
      this.state.email,
      this.state.password
    )

    this.setState({
      loading : true
    })

    setTimeout(() => { 
      this.setState({
        name : "",
        email : "",
        password : "",
        loading : false,
        loggedIn : true  
      })
      
    }, 2000);
  }

  handleIncrement () {
    this.setState({
      number : this.state.number + 1
    })
  }

  handleDecrement () {
    this.setState({
      number : this.state.number - 1
    })
  }

  handleLogout () {
    this.setState({
      loggedIn : false
    })
  }

 

  render(){
    if(this.state.loading) return <div style={{height:"100vh"}} className='flex_col'><CircularProgress size={70} /></div> 
    return(
      <div className='flex_col' style={{height: "100vh"}} >
      {!this.state.loggedIn ?
        <form style={{width: "70%"}} onSubmit={(e) => this.handleSubmit(e)} >
          <input className="input" type="text" placeholder="name" value={this.state.name} onChange={(e) => this.handleName(e)} />
          <input className="input" type="email" placeholder="email" value={this.state.email} onChange={(e) => this.handleEmail(e)} />
          <input className="input" type="password" placeholder="password" value={this.state.password} onChange={(e) => this.handlePassword(e)} />
          <button className="btn_primary" type="submit" style={{margin : 40}}  >login</button>
        </form> :
        <div style={{width: "100%"}} className='flex_col'>
          <div className='flex_between' style={{width: "50%"}}>
            <Button variant='contained' color='primary' onClick={() => this.handleIncrement()} >increment</Button>
            <p>{this.state.number}</p>
            <Button variant='contained' color='secondary' onClick={() =>this.handleDecrement()} >decrement</Button>
          </div>
          <button className="btn_primary"  style={{margin : 40}} onClick={() => this.handleLogout()}  >logout</button>
        </div>
      }
       </div>
    )
  }

}
export default App





