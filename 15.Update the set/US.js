class Geeks extends React.Component{
    state={
        firstName:'Jeevitha',
        age:22
    }
    render(){
        return <div>
        <h1> Welcome, {this.state.firstName} Age:{this.state.age}</h1>
        <button onClick={()=>this.changeName()}>Click to Change Name</button>
        </div>
    }
    changeName(){

        console.log('before :',this.state.firstName);
        this.setState({
            firstName:'Bindu',
            age:23
            
        },()=>{
        console.log('After :',this.state.firstName);
    })


        //NEVER EVER MUTATE STATE LIKE THIS

        // console.log('before :',this.state.firstName);
        // this.state.firstName='Bindu'
        // console.log('After :',this.state.firstName);
    }
    
}

ReactDOM.render(<Geeks/>,document.getElementById('container'))