import React from 'react';
import { ICharacters as IProps } from '../../App'

const List: React.FC<IProps> = ({ characters }) => {
  return (
    <ul>
      {characters.map((char => {
        return (
          <li className='List' key={char.name}>
            <div className='List-header'>
              <img className='List-img' src={char.url} alt="not found" />
              <h2>{char.name}</h2>
            </div>
            <p>{char.age}</p>
            <p className='List-note'>{char.note}</p>
          </li>
        )
      }))}
    </ul>
  )
}

export default List