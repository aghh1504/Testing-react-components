import React from 'react';

  const List = (props) => {
    return (
      <ul>
        {
          props.items.map( item =>  <li>{item}</li> )
        }
      </ul>
    )

  }
  export default List;
