import React, {Component} from 'react'

class NavBar extends Component {
    state = {
        navClass: '',
    }

    componentDidMount() {
        console.log("mount start")
        window.addEventListener('scroll', this.getWindowHeight)
    }

    componentWillUnmount() {
        console.log("mount end")
        window.removeEventListener('scroll', this.getWindowHeight);
    }

    getWindowHeight = () =>{
        console.log("handle scroll")
        if(window.pageYOffset > 200 ){
            this.setState({navClass: 'small'})
        }
    }

    render() {
        console.log("Hello", this.state);
        return(
            <div>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
                <p>pa</p>
            </div>
        )
    }
}

// function NavBar(){
//     const [state, setState] = React.useState(1);
//     console.log(`STATE: ${state}`);
//
//     React.useEffect(() => {
//         // setState(state + 1);
//         console.log(`IN EFFECT`)
//     });
//
//     return(
//         <div>
//             {console.log(`IN DOM`)}
//             NavBar {state}
//             <button onClick={() => setState(state + 1)}>Click</button>
//         </div>
//     )
// }

export default NavBar