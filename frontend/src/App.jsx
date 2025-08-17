import Navbar from './Components/Navbar'
import TaskItems from './Components/TaskList'
import TaskProvider from './Context/TaskProvider'

const App = () => {
  return (
    <TaskProvider>
      <Navbar />
      <TaskItems />
    </TaskProvider>
  )
}

export default App