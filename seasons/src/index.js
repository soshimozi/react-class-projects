import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => { console.log(position) },
    (error) => console.error(error)
  );
  
  return (
    <div>
      Hi there!
      <SeasonDisplay />
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);