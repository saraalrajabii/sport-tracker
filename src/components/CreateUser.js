import React , {Component} from 'react';


export default class CreateUser extends Component{

    constructor(props){
        super(props);
   
        this.state={
           user:""
        }
       this.onChangeUser = this.onChangeUser.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

    }
    
    componentDidMount() {
    }
   
   
   
   
    onChangeUser(e) {
       this.setState({
        user: e.target.value
       })
       console.log(this.state.user)
     }
   
     onSubmit(e) {
        console.log('users');
       e.preventDefault();
       const users = {
        user: this.state.user,
       }
       console.log(users);
       window.location = '/';
     }
       render(){
           return(
               <div>
                    <h3>Create New User Log</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>user: </label>
                <input
                type="text"
                    required
                    className="form-control"
                    value={this.state.user}
                    onChange={this.onChangeUser}
                
                />
              </div>
              <div className="form-group"  >
                <input type="submit" value="Create user Log" className="btn btn-primary" />
              </div>
              </form>
               </div>
           )
    }
}