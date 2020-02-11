import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokedexDisplay(props) {
  const element = (
    <ul>
      {props.pokedex.map(data => <li key={data.number}>
        {data.name}
      </li>
      )}
    </ul>);

  return (
    <div>{element}</div>
  );
}

ReactDOM.render(
  <PokedexDisplay pokedex={pokedex} />,
  document.getElementById('root')
);
