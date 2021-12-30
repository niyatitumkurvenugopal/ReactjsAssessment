function MyApp(){
    
    
    const [Person,setPerson]=React.useState({
         firstName:'Jeevitha',
         lastName:'M V'

    })

    
    let updateFirstName=()=>{
        //never update state like below while using react hooks for objects
        // setPerson({
        //     firstName:'Bindu'
        // })

        // always update the state like below
        setPerson({
            ...Person,
            firstName:'Bindu'
        })
    }
        
    
    return<div>
        <p>First Name: {Person.firstName}</p>
        <p>Last Name:  {Person.lastName}</p>
        <button onClick={updateFirstName}>Change the first name.</button>
    </div>
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))