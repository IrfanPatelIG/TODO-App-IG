import { useEffect, useState, useRef } from 'react'
import NavBar from './components/NavBar.jsx'

function App() {
  const [taskData, setTaskData] = useState([])
  const checkBtn = useRef(null)
  const inputRef = useRef(null)

  function getDataFromStorage() {
    let randomNum = Math.floor(Math.random() * (20 - 1) + 1)
    let newTasks = []
    for (let i=1; i <= randomNum; i++) {
      newTasks.push({
        id: i,
        task: `ABCDEFG ${i}`,
        completed: false
      })
    }
    setTaskData(newTasks)
  }

  function ToggleTask() {
    setTaskData(prev => {
      prev.map(task => {
        task.id === id ? {...task, completed: !task.completed} : task
      })
    })
  }

  const TodoCard = ({Data}) => {
    return <>
      <li className='task-lis *:h-full'>
        <div className='task-num flex-text-center w-6 pl-2'>{Data.id}</div>
        <div className='task-todo flex-text-center p-1'>{Data.task}</div>
        <div className="actions flex items-center  gap-2 h-full p-1 *:w-[36px] *:h-[36px] *:transition-[background-image] *:duration-400 *:ease-out">
          <span className='edit-task cursor-pointer hover:bg-[url("./assets/square-pen-fill.svg")] hover:animate-rotate360 bg-[url("./assets/square-pen-nofill.svg")] bg-cover bg-no-repeat bg-center'></span>
          <span ref={checkBtn} onClick={() => ToggleTask(Data.id)} className='check-task cursor-pointer bg-cover bg-no-repeat bg-center hover:animate-rotate360 bg-[url("./assets/check-circle-nofill.svg")] hover:bg-[url("./assets/check-circle-fill.svg")]'>
            
          </span>
          {/* <span className='delete-task cursor-pointer hover:bg-[url("./assets/trash-fill.svg")] hover:animate-rotate360 bg-[url("./assets/trash-nofill.svg")] bg-cover bg-no-repeat bg-center'></span> */}
        </div>
      </li>
    </>
  }

  useEffect(() => {
    getDataFromStorage()
  }, [])

  return (
    <>
      <div className='main-container w-screen h-screen font-arimo'>
        <NavBar />

        <div className="w-[98%] h-[90vh] mx-[1vw] my-[1vh] rounded-lg bg-linear-to-br/decreasing from-indigo-500 to-teal-40">
          <main className="hero-section w-fit p-1.5 m-auto translate-y-[25%] flex flex-col gap-3.5">
            <div className="task w-fit h-12 m-auto overflow-hidden flex rounded-[28px]">
              <input ref={inputRef} type="text" name="task" placeholder='What to do?' className='w-lg px-4 py-2 text-white text-[18px] bg-[#1018286f] focus:outline-0' />
              <button className='prime-btn w-32 text-xl'>Add</button>
            </div>

            <div className="tasks-todo flex flex-col gap-3">
              <div className="switch-tab flex items-center justify-center gap-2.5 *:rounded-md *:border-2 *:border-bg-prime-2 *:px-2 *:py-0.5 *:hover:bg-bg-prime-1-30 *:cursor-pointer">
                <span>pending tasks</span>
                <span>completed tasks</span>
              </div>
              <ul role='list' className='tasks-list w-[98%] max-h-[340px] pb-1 flex flex-col items-start gap-2 m-auto overflow-y-auto'>
                {
                  taskData.map((taskD) => {
                    return <TodoCard key={taskD.id} Data={taskD} />
                  })
                }
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App