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
        task: ` Lorem ipsum dolor sit amet, This is a Test TODO Card to chech wheather the UI is perfect or not consectetur adipisicing elit. Hic ducimus odit architecto? Hic ducimus odit architecto?  Hic ducimus odit architecto? ${i}`,
        isCompleted: false
      })
    }
    setTaskData(newTasks)
  }

  function ToggleTask(e) {
    console.log(e.target)
    let targetEl = e.target
    let taskID = targetEl.attributes.name.value
    console.log(taskID)

    if (targetEl.attributes.id.value === "check") {
      console.log("Checked")
      taskData.forEach(task => {
        // console.log(task.id, task.isCompleted, task.id == taskID)
        if (task.id == taskID) {
          task.isCompleted = !task.isCompleted
          console.log(taskData[taskID])
        }
      });
    }
  }

  const TodoCard = ({Data}) => {
    return <>
      <li onClick={(e) => ToggleTask(e)} className='task-lis min-w-[99.5%] max-w-[99.5%] min-h-17.5 max-h-17.5'>

        {/* ID */}
        <div className="tesk-id h-17.5 min-w-[44px] flex-text-center text-base font-bold 
        text-white rounded-l-my bg-slate-900 shadow-inner">
          {Data.id}
        </div>

        {/* Task Text */}
        <div className=" tesk-text h-15 p-1 pl-1.5 pb-2.5 flex-text-start overflow-y-auto">
          {Data.task}
        </div>

        {/* Actions */}
        <div className="tesk-actions h-17.5 px-2.5 flex items-center gap-3 
          *:w-[34px] *:h-[34px] *:rounded-lg *:bg-white/70 *:shadow-sm *:invert *:bg-size-[20px] *:bg-no-repeat *:bg-center 
          *:hover:scale-110 *:hover:bg-white *:hover:shadow-md *:hover:cursor-pointer 
          *:relative transition-all duration-300">

          {/* Edit */}
          <div id='edit' name={`${Data.id}`} className='group bg-[url("./assets/pencil.svg")]'>
            <span className='action-btn-all'>
              Edit
            </span>
          </div>

          {/* Conditional */}
          {Data.isCompleted ? (
            <div id='delete' name={`${Data.id}`} className='group bg-[url("./assets/trash.svg")]'>
              <span className='action-btn-all'>
                Delete
              </span>
            </div>
          ) : (
            <div id='check' name={`${Data.id}`} className='group bg-[url("./assets/check.svg")]'>
              <span className='action-btn-all'>
                Check
              </span>
            </div>
          )}

        </div>
      </li>

    </>
  }

  useEffect(() => {
    getDataFromStorage()
  }, [])

  return (
    <>
      <div className='main-container w-screen h-screen font-arimo overflow-x-hidden box-border bg-[url("./assets/ice-background-img.jpg")] bg-cover backdrop-blur-lg'>
        <NavBar />

        <div className="w-full h-[calc(100%-52px)] bg-radial m-auto pt-20 from-bg-carbon-dark from-40% to-bg-carbon-dark backdrop-blur-md backdrop-opacity-90">
          <main className="hero-section min-w-[50%] max-w-[50%] p-1.5 m-auto flex flex-col items-center gap-3.5 overflow-hidden *:overflow-hidden">
            <div className="task w-fit h-13 m-auto overflow-hidden flex rounded-[28px]">
              <input ref={inputRef} type="text" name="task" placeholder='What to do?' className='w-[600px] px-4 py-2 text-white text-[19px] bg-bg-carbon-dark-soft focus:outline-0' />
              <button className='w-32 prime-btn-og'>Add</button>
            </div>

            <div className="tasks-todo w-[88%] flex flex-col gap-3">
              <div className="switch-tab flex items-center justify-center gap-5 p-1.5 
                *:font-bold  *:px-4 *:py-1 *:text-white *:rounded-lg *:shadow-[2px_2px_4px] *:shadow-black *:text-shadow-black *:bg-bg-primary-2-dark-soft 
              *:hover:bg-slate-950 *:hover:ring-2 *:hover:text-[#ffffff] *:hover:text-shadow-[1px_1px_3px] 
                *:transition-all *:hover:cursor-pointer">
                <span className='ring-[#ea0c0c]'>Pending tasks</span>
                <span className='ring-green-400'>Completed tasks</span>
              </div>
              {/* In the Below <ul> all TODOs will be shown */}
              <ul role='list' className='tasks-list w-full max-h-[340px] p-1.5 flex flex-col items-start gap-2.5 rounded-my overflow-y-auto'>
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