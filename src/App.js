import { useState } from 'react';
import './App.css';
import ToDoItem from './components/counter';
import NewTask from './components/newTaskWindow.jsx';

const fakeData = [
  { descreption: 'Shopping', complete: 'false' },
  { descreption: 'replace door handles', complete: 'true' },
  { descreption: 'book hallowen party', complete: 'false' },
  { descreption: 'service and wash car', complete: 'true' },
  { descreption: 'learn git', complete: 'false' },
  { descreption: 'replce car tyres', complete: 'false' }
]



function App() {
  const [DoItem, setDoItem] = useState(fakeData);


  function markDoneHandler(descreption) {
    const UndoneTasks = DoItem.filter(item => item.descreption !== descreption)
    const DoneItem = DoItem.filter(item => item.descreption === descreption)
    DoneItem[0].complete = 'true'
    const newItems = [...DoneItem, ...UndoneTasks]
    setDoItem(newItems)
  }

  function unDoHandler(descreption) {
    const UndoneTasks = DoItem.filter(item => item.descreption !== descreption)
    const DoneItem = DoItem.filter(item => item.descreption === descreption)
    DoneItem[0].complete = 'false'
    const newItems = [...DoneItem, ...UndoneTasks]
    setDoItem(newItems)
  }

  const [open, setopen] = useState(false)
  function addNewTask() {
    setopen((open) => !open)
    console.log(open)
  }

function addTaskContent(e){
  e.preventDefault()
  console.log('working')
  let taskText = document.querySelector('#descreption-text').value
  let textObject = [{descreption:taskText, complete:'false'}]
  let newTaskArray = [...textObject, ...DoItem]
  setDoItem(newTaskArray)
}

return (

  <div className='container'>
    <h1 className='main-header'>AwesomeDo</h1>
    <button className='add-task' onClick={addNewTask}>Add new task</button>
    {open && (<NewTask addNewtask={addNewTask} addTaskText={addTaskContent}></NewTask>)}
    <h2>ToDo</h2>
    {DoItem.filter(item => item.complete === 'false').map(item => <ToDoItem key={item.descreption} buttonHandle={markDoneHandler} descreption={item.descreption} complete={item.complete}></ToDoItem>)}
    <h2>Done</h2>
    {DoItem.filter(item => item.complete === 'true').map(item => <ToDoItem key={item.descreption} buttonHandle={unDoHandler} descreption={item.descreption} complete={item.complete}></ToDoItem>)}
  </div>
);
}

export default App;
