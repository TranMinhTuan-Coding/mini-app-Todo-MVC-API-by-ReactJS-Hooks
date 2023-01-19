import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import TodoMVCApp from './components/TodoMVCApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoMVCApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Lưu ý:
// 1. useEffect( Call-back )
//    Call-back được gọi mỗi khi component mounted
//    Call-back được gọi mỗi khi component re-render
//    Call-back được gọi mỗi khi component thêm element vào DOM

// 2. useEffect( Call-back, [])
//    Call-back được gọi duy nhất 1 lần mỗi khi component được mouted

// 3. useEffect( Call-back, [dependencies] )
//    Call-back được gọi mỗi khi component mounted
//    Call-back được gọi môi khi giá trị của biến dependencies thay đổi !

