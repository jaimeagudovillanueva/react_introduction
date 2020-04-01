import React from 'react';

const withClass = props => (
    <div className={props.classes}>{props.children}</div>
);

// Otra forma de hacer un componente HOC, en este caso como una función
// const withClass = (WrappedComponent, className) => {
//     return props => (
//         <div className={className}><WrappedComponent {..props}/></div>
//     )
// }

export default withClass;