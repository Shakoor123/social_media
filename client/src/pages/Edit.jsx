import Form from '../components/Form/Form'
import Leftbar from '../components/Leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import './Edit.css'

const Edit = () => {
  return (
    <div className='edit'>
        <Navbar />
        <div className="editcontainer">
        <Leftbar/>
        <Form/>
        </div>
    </div>
  )
}

export default Edit