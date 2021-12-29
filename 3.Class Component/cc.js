//Class Component

class Header extends React.Component{
    render(){
        return<h1>I'M Header</h1>
    }
    
}

class Content extends React.Component{
     render(){
         return <h3>I'm Content  {this.props.firstName} {this.props.secondName}</h3>
     }
}
class Footer extends React.Component{
    render(){
        return<h4>I'm Footer</h4>
    }
}

ReactDOM.render(<div>
    <Header/>
    {/*Props in content Component*/}
    <Content  firstName="Niyati" secondName="T V"/>
    <Content />
    <Content />
    <Footer/>
    </div> ,document.getElementById('container'))