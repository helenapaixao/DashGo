import { Stack } from "@chakra-ui/react"
import { NavSection } from "./NavSection"
import { NavLink } from './NavLink'
import { RiInputMethodLine, RiGitMergeLine, RiDashboardLine, RiContactsLine } from 'react-icons/ri'

export function SideBarNav() {
  return (
 <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>

  )
}