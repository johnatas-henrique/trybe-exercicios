import React from 'react';
import { connect } from 'react-redux';

const generateRandomString = () => (
  Math.random().toString(36).substring(2, 15)
);

const addItem = () => ({
  type: 'ADD_ITEM',
  text: generateRandomString(),
  createdAt: new Date().toISOString(),
});

const List = ({ items, dispatch }) => (
  <div>
    <button type="button" onClick={() => dispatch(addItem())}>
      Clique para adicionar!
        </button>
    {
      items.map((item, index) => (
        <ul key={index}>
          <li>{item.text}/{item.createdAt}</li>
        </ul>
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(List);
