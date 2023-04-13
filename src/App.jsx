import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Topbar from './Layout/Topbar'
import Sidebar from './Layout/Sidebar'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import Contacts from './pages/contacts'
import Invoices from './pages/invoices'
import Form from './pages/form'
import Bar from './pages/bar'
import Line from './pages/line'
import Pie from './pages/pie'
import FAQ from './pages/faq'
import Geography from './pages/geography'
import Calendar from './pages/calendar'

const App = () => {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/line' element={<Line />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
