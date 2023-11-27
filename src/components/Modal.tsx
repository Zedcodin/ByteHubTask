import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { colors } from '../constants/colors';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


const repoData = [
    {id:1,repoName:'hy',repoDes:'hello world',repoLang:'English'},
    {id:1,repoName:'hy',repoDes:'hello world',repoLang:'English'},
    {id:1,repoName:'hy',repoDes:'hello world',repoLang:'English'},
    {id:1,repoName:'hy',repoDes:'hello world',repoLang:'English'},


]

interface MyComponentProps {
    repositories: any[];
    showModal:boolean
    myFunctionProp: () => void;
  }
  
const ModalComponent: React.FC<MyComponentProps> = ({showModal,repositories,myFunctionProp}) => {
  const [show, setShow] = useState(false);
  const username = useSelector((state: RootState) => state.user.username);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  

  return (
    <>
      <Modal size={'lg'} show={showModal} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:colors.primary }} >
        
          <Modal.Title  className='text-light'>{username}'s Repositories</Modal.Title>
          <Button style={{backgroundColor:colors.colorsecondary}} className='text-light' variant="inline" onClick={myFunctionProp}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
        <Table responsive striped bordered hover size="lg">
      <thead>
        <tr>
          <th>ID</th>
          <th>Repo Name</th>
          <th>Repo Description</th>
          <th>Repo Language</th>
        </tr>
      </thead>
      <tbody>
    
            {repositories.map((repo) =>(
                        <tr>
                        <td>{repo.id}</td>
                        <td>{repo.full_name}</td>
                        <td>{repo.description}</td>
                        <td>{repo.language}</td>
                      </tr>
              
                

            ))}
          
        
      </tbody>
    </Table>

           
            
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ModalComponent;