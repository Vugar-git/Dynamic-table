import React from 'react'
import Todostable from "./Tables/Todostable";
import Posts from './Tables/Posts';
import Comments from './Tables/Comments';
import Albums from './Tables/Albums';
import Photos from './Tables/Photos';
import Users from './Tables/Users';
import { useState } from 'react';
import "./App.css";

const App = () => {

const [selectedTable, setSelectedTable] = useState('todos');


  const renderSelectedTable = () => {
    switch (selectedTable) {
      case "todos":
        return <Todostable />;
      case "posts":
        return <Posts />;
      case "comments":
        return <Comments />;
      case "albums":
        return <Albums />;
      case "photos":
        return <Photos />;
      case "users":
        return <Users />;

      default:
        return null;
    }
  };

  const apiUrl = "https://jsonplaceholder.typicode.com/";
const generateApiUrl = (table) => `${apiUrl}${table}`;

  return (
    <>
      <header>
        <div>
          <h1>Dynamic Table and Dynamic Api</h1>
          <p className='colored'>API: {generateApiUrl(selectedTable)}</p>
          <hr></hr>
          <button onClick={() => setSelectedTable("todos")}>Todos</button>
          <button onClick={() => setSelectedTable("posts")}>Posts</button>
          <button onClick={() => setSelectedTable("comments")}>Comments</button>
          <button onClick={() => setSelectedTable("albums")}>Albums</button>
          <button onClick={() => setSelectedTable("photos")}>Photos</button>
          <button onClick={() => setSelectedTable("users")}>Users</button>
        </div>
      </header>
      <main>
        <div id="tables">{renderSelectedTable()}</div>
      </main>
    </>
  );
}

export default App