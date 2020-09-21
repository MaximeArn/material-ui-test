import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import './characters.scss';

function Characters({ data }) {
  return (
    <ul>
      {data.map((character) => {
        if (character.house) {
          return <Character key={character._id} {...character} />;
        }
      })}
      ;
    </ul>
  );
}

Characters.propTypes = {
  character: PropTypes.array.isRequired,
};

export default Characters;
