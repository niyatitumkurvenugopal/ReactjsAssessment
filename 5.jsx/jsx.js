//jsx

const userName='Niyati'

const element=<h1 id='demo'>Hello , {userName}</h1> //When referring to js variablr use{}
const elements=<h2 id='demo1'>These are the Laptopss name.</h2> 

let laptops=['dell','hp','lenovo','macbook']

let items= <ol>
    {laptops.map((name,idx)=>{
        return <li key={name+idx}>{name}</li>
    })
    }

</ol>

let allItems =React.createElement('div',null,element,elements,items)

ReactDOM.render(allItems,document.getElementById('container'))
//ReactDOM.render(element,document.getElementById('container'))
//ReactDOM.render(items,document.getElementById('container'))