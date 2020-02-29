import React, {Component} from 'react'

// class NavBar extends Component {
//
//     render() {
//         console.log("Hello");
//         return(
//             <div>
//                 nav
//             </div>
//         )
//     }
// }

function NavBar(){
    const [state, setState] = React.useState(1);
    console.log(`STATE: ${state}`);

    React.useEffect(() => {
        // setState(state + 1);
        console.log(`IN EFFECT`)
    });

    return(
        <div>
            {console.log(`IN DOM`)}
            NavBar {state}
            <button onClick={() => setState(state + 1)}>Click</button>
        </div>
    )
}

export default NavBar