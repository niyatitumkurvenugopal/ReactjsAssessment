function Welcome(props){
    const getData=()=>{
        console.log("Button is clicked");
        console.log(props.name)
    }
    return (
        <div>
            <button onClick={()=>getData()}>Click Me</button>
        </div>
    )
}


ReactDOM.render(<Welcome name='Niyati'/>,document.getElementById('container'))