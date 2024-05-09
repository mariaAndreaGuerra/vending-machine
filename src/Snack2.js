import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div>
      <h2>Snack 2</h2>
      <p>This is Snack 2 description.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;
