import React, { useState } from "react";

const TodoList2 = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    text: "",
    id: "",
  });
  const [editItem, setEditItem] = useState({
    id: "",
    isItem: false,
  });

  const changeMessage = (e) => {
    setData({
      ...data,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: data.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setData({
      text: "",
      id: "",
    });
  };

  const handleEditItem = (id) => {
    setEditItem({
      ...editItem,
      id: id,
      isItem: true,
    });
    let editableItem = list.find((eachObj) => eachObj.id === id);
    setData({
        ...data,
        text: editableItem.text,
        id: editableItem.id
    })
  };
  const handleDelete = (id) => {
    let newTodos = list.filter((eachObj) => {
      return eachObj.id !== id;
    });
    setList(newTodos);
  };

  const handleEdit = (e) =>{
    e.preventDefault();
    let newTodos = list.map((eachObj) =>{
        if(eachObj.id === editItem.id){
            return{
                text: data.text,
                id: editItem.id
            }
        }else{
            return eachObj
        }
    })
    setList(newTodos);
    setData({
        text: '',
        id: ''
    })
    setEditItem({
        id: '',
        isItem: false
    })
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter Todo list"
          value={data.text}
          onChange={changeMessage}
        />
        {editItem.isItem ? (
          <button type="submit" onClick={handleEdit}>
            edit
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h4>There is no List's in Todo's</h4>}
      <ul>
        {list.map((eachObj) => {
          const { text, id } = eachObj;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => handleEditItem(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList2;
