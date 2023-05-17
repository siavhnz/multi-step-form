import { useState } from 'react'
import StepWizard from './components/StepWizard'
import StepWizardContextProvider from './store/context/stepwizard-context';
function App() {

  return (
    <StepWizardContextProvider>
      <StepWizard />
    </StepWizardContextProvider>

  )
}

export default App
