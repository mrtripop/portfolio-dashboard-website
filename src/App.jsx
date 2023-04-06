import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='relative flex dark:bg-main--dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000 ' }}>
            <TooltipComponent content={'Settings'} position='top'>
              <button>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
