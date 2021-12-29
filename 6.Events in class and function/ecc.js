class Welcome extends React.Component{
    render(){
        return <div>
            <h1>Welcome,{this.props.name}</h1>
            <button onClick={this.getData}>Click me</button>
            {/*Good practice*/}
            <button onClick={   ()=>{this.getName()}   }>Get Name</button>
            <button onClick={   ()=>{this.getAge("young")}  }>Get age</button>
            </div>
    }
    getData(){
        console.log("get data is executed");
    }
    getName(){
        console.log(this);

    }
    getAge(data){
        console.log(data);
    }
}

ReactDOM.render(<Welcome name='chutki'/>,document.getElementById('container'))