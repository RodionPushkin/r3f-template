import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage: React.FC = () => (
  <div>
    <h1>404 - Такой страницы нет</h1>
    <Link to="/">Вернуться на главную</Link>
  </div>
);
export default NotFoundPage;
