import React from 'react'

import NavbarComponent from './components/nav'
import { colors } from './constants/colors'
import { relative } from 'path'
import Inputs from './components/Input'
import ModalComponent from './components/Modal'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../src/components/redux/store';

function ByteHubApp() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal,setShowModal] = useState(false)
    //const username = 'Zedcodin'
    const username = useSelector((state: RootState) => state.user.username);
    console.log(username)

    const hideModal = () => {
        setShowModal(false)
    }

  
    
      const fetchRepositories = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}/repos`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setRepositories(data);
          setShowModal(true)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching repositories:', error);
          setLoading(false);
        }
      };
  

    console.log(repositories)
  return (
    <div style={{position:"relative"}} className=' '>
        <header  className=''>
            <NavbarComponent />
        </header>
        <section  className='mainsection container-fluid pt-5 '>
            <main>
                <div className='w-100 d-flex justify-content-center text-light flex-column align-items-center '>
                <h3 className='w-75 text-center display-5 fw-bold fs-1 mt-3 '  > Welcome to our GitHub Repositories App!

</h3>

                    <p className='w-75 text-center my-5 lead '>This website allows you to easily retrieve information about GitHub repositories. Simply enter a GitHub username, and we'll fetch all the repositories associated with the username.</p>

                     
                    <Inputs myFunctionProp={fetchRepositories} />


                    
                </div>


             <div>
                <ModalComponent myFunctionProp={hideModal}  showModal = {showModal} repositories={repositories} />
             </div>
            </main>
            <div className="custom-shape-divider-bottom-1701078068">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
        </section>
        <section style={{height:300}} className='container my-5'>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <div className='w-75'>
                <h2 style={{color:colors.colorsecondary}} className='text-center display-3 fw-bold fs-1'>About</h2>
            <p className='text-center lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo perspiciatis, voluptas quaerat 
            architecto veniam sapiente magnam quisquam non quod eius exercitationem, 
            id suscipit molestias eligendi illum excepturi! Rem, delectus?</p>

                </div>

            </div>
 
        
        </section>

        <footer className='container-fluid d-flex justify-content-center align-items-center ' style={{height:300,backgroundColor:colors.primary}}>
            <h4 className='text-light'>@Joshua Simwawa 2023</h4>

        </footer>
    </div>
  )
}

export default ByteHubApp