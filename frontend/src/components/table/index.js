import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Color from '../../useChangeColor';

const Table = () => {

  const users = useSelector(state => state.users);
  const [color, setColor] = useState('bg-secondary')
  const { background } = Color(color);

  const handlerColor = () => {
    if (color === 'bg-secondary') setColor('bg-primary')
    if (color === 'bg-primary') setColor('bg-success')
    if (color === 'bg-success') setColor('bg-danger')
    if (color === 'bg-danger') setColor('bg-warning')
    if (color === 'bg-warning') setColor('bg-dark')
    if (color === 'bg-dark') setColor('bg-secondary')
  } 

  return (
    <div>
      {
        users.length? 
          <React.Fragment>
          <span>"change the color of the header with a click"</span>
          <table className="table table-bordered">
            <thead role="button" className={background} onClick={handlerColor}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">E-MAIL</th>
              </tr>
            </thead>
            <tbody>
            {
              users.map(item => 
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>)
            }
            </tbody>
          </table>
          </React.Fragment>
        : 
        ''
      }
    </div>
  )
}

export default Table;