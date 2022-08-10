import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  // // React.StrictMode는 개발자를 위한 태그로서 이걸로 감싸져있으면 두번씩 실행됨
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
