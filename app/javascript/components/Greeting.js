import React from 'react';
import { connect } from 'react-redux';

function Greeting({ message }) {
  return (
    <div>
      <h1>Greeting</h1>
      <p>{message}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
    message: state.greeting, // Assuming your reducer stores the greeting in 'greeting' field
  });
  
  export default connect(mapStateToProps)(Greeting);