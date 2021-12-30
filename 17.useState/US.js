//react hooks
//It should be writtrn on Top

function MyApp(){
    //class component
    
    // state{
    //     name:"Niyati",
    //     age:22
    // }
    
    
    //Functional Component
    //   const [Name,setName] = React.useState("Niyati")
    //   const [Age,setAge] = React.useState(22)
    
    
        const [Name,setName] = React.useState("Niyati")
        const [Age,setAge] = React.useState(22)
    
          
        let updateName=()=>{
            setName('Jeevitha')
            setAge('21')
    
       }
        
        return<div>
            <h1>Welcome, {Name} <br></br>age:{Age} </h1>
            <button onClick={()=>{updateName()}}>Update Name</button>
        </div>
     
    
    }
     
    
    ReactDOM.render(<MyApp/>,document.getElementById('container'))
    