// import React, { useContext } from 'react'


// import { EducationContext, HealthContext } from '@/context/Education'
// import SignUp from './SignUp'
// import DoctorComponent from './Teacher/Teacher'
// import PatientComponent from './Student/Student'

// const MainComponent = () => {
//     const { ConnectedAccountUser } = useContext(EducationContext)


//     const accountType = () => {
//         if (ConnectedAccountUser == "1") {
//             console.log(ConnectedAccountUser);
//             return (<DoctorComponent />)
//         }
//         else if (ConnectedAccountUser == "2") {
//             console.log("ConnectedAccountUserType", ConnectedAccountUser);
//             return (<PatientComponent />)

//         }
//         else {
//             return (<SignUp />)
//         }
//     }
//     return (
//         <div>
//             {accountType()}

//         </div>
//     )
// }

// export default MainComponent