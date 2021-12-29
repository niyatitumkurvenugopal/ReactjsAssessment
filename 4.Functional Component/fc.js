//Functional Component

function Header(props){
    return <h1 className="some">Hello Everyone(I'm Header)<span className='ptag' > {props.name}</span></h1>
}

function Content({firstName,lastName,userName}){
    return <h2>I'm {firstName} {lastName} {userName}</h2>
}

function Footer({person}){
    return <h4>(I'm Footer) {person.first} {person.last}</h4>
}

ReactDOM.render(<div>
    <Header name='Hi'/>
    <Content firstName="Niyati" lastName="T V"/>
    <Content firstName="Inchu" userName="S"/>
    <Content firstName="Pooja"/>
    <Footer person={{first:'Hello', last:'Niyati'}}/>
    </div>, document.getElementById('container'))