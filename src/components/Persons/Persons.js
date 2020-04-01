import React from 'react';

import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = props => 
    props.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}><Person 
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
        name={person.name} 
        age={person.age}
        /></ErrorBoundary>
  });

  export default persons;