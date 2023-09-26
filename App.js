import React from 'react';
import ReactDOM from 'react-dom/client';

function Heading(){
    return (
        <div>
            <h1>head1</h1>
            <h2>head2</h2>
        </div>
    )
}

function Body(){
    return (
        <div>
            <Heading/>
            <h1>Body</h1>
        </div>
    )
}

const name='Ganesh';
console.log(name);
function Root(){
    return (
        <div>
            <Body/>
            root {name +name}
        </div>
    )
}
console.log(Heading)
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root/>);
