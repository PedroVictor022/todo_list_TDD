import { useState } from "react";
import styled from "styled-components";

export function ListForm() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault() ;

    const arrTask = [...tasks, {
      id: Math.random().toFixed(2),
      title: inputTask
    }];
    setTasks(arrTask);
    console.log(tasks);

  }

  return (
    <Container>
      <form className="actions" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button>oi</button>
      </form>
      <div className="tasks">
        {
          tasks.map((item) => {
            <div>
              <p>oi{item.title}</p>
            </div>
          })
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
