function Title(props){

    const data=['Mobiles','Laptops','Earphones','T V','Tablets','Projector']

    return <div>
        <h1>Welcome {props.userName}</h1>
        <List items={data}/>
        
    </div>
    
}

function List(props){
    return<div>
        <h2> Hello ,Good Morning</h2>
        {props.items.map((val,idx)=>{
            return <li key={val+idx}>{val}</li>
        })
        }
       
    </div>

}
ReactDOM.render(<Title userName='Niyati'/>
    ,document.getElementById('container'))