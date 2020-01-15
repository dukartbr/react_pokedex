import React from 'react';

function GenerationsTab(props) {
  const updateGenHandler = e => {
    props.updateGeneration(e.target.id);
  };

  return (
    <div className='generations-tab--container'>
      <ul className='generations-tab--list-container'>
        <li className='generations-tab--list-item'>
          <button
            id='gen1'
            className='generations-tab--list-button'
            onClick={updateGenHandler}
          >
            Gen 1
          </button>
        </li>
        <li className='generations-tab--list-item'>
          <button
            id='gen2'
            className='generations-tab--list-button'
            onClick={updateGenHandler}
          >
            Gen 2
          </button>
        </li>
        <li className='generations-tab--list-item'>
          <button
            id='gen3'
            className='generations-tab--list-button'
            onClick={updateGenHandler}
          >
            Gen 3
          </button>
        </li>
        <li className='generations-tab--list-item'>
          <button
            id='gen4'
            className='generations-tab--list-button'
            onClick={updateGenHandler}
          >
            Gen 4
          </button>
        </li>
      </ul>
    </div>
  );
}

export default GenerationsTab;
