function MyApp (){

    
    const [books,setbooks] =  React.useState(['400 Days','A Girl In A Room 105','I Too Had A Love Story','Rich Dad Poor Dad','The Power Of Your Subconscious Mind'])
    
    let removeRichDadPoorDad=()=>{
            let indexOfRichDadPoorDad = books.indexOf('Rich Dad Poor Dad')
            console.log(indexOfRichDadPoorDad)
            
            if(indexOfRichDadPoorDad>=0){
            books.splice(indexOfRichDadPoorDad,1)
            setbooks(
                [...books]
            )}
            }
    
    
    
    
    return <div>
        {
             books.map((book,idx)=>{
             return <p key={book+idx}>{book}</p>
         })
         }
         <button onClick={removeRichDadPoorDad}>Remove Rich Dad Poor Dad</button>
    </div>
}




ReactDOM.render(<MyApp/>,document.getElementById('container'))