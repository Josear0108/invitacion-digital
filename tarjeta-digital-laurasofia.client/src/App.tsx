import type React from "react"
import { InvitationProvider } from "./context/InvitationContext"
import InvitationPage from "./features/invitation/InvitationPage"

const App: React.FC = () => {
  return (
    <InvitationProvider>
      <InvitationPage />
    </InvitationProvider>
  )
}

export default App
