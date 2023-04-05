import { useState } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";

export function ListForm() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault() ;

    if(!inputTask.trim()) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 100),
        title: inputTask
      }
    ])

  }

  const handleDelete = (id) => {
    const temp = tasks.filter(task => task.id !== id);
    temp.slice(id, 1);
    setTasks(temp);
  };

  return (
    <Container>
      <form className="actions" onSubmit={handleSubmit}>
        <Input 
          type="text" 
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <Button>Adicionar</Button>
      </form>
      <div className="tasks">
        {
          tasks.map((item) => (
            <Item key={item.id}>
              <p>{item.title}</p>
              <button onClick={(id) => handleDelete(item.id)}>Delete</button>
            </Item>
          ))
        }
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 10px;
  justify-content: center;

  width: 100%;

  border: 1px solid #fefefe;

  .actions {
    margin: 1rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
  }
`;

const Item = styled.div`
  display:flex;
  gap:1rem;

  padding:1rem;
  button {
    outline: none;
    border:none;
  }
`;