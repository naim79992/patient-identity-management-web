// import { NavBar } from '@/components'
import { React } from 'react'


import EducationProvider from '@/context/Education'
import '@/styles/globals.css'


const App = ({ Component, pageProps }) => {
   
    return (<EducationProvider>
        {/* <NavBar/> */}

        <Component {...pageProps} />

    </EducationProvider>)
}

export default App

