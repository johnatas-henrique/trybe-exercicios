import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Image from './image';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='x' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
