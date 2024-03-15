import { Button, Stack } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AppShell,
  AppShellContent,
  AppShellContentBody,
  AppShellContentHeader,
  AppShellSidebar,
  AppShellSidebarBody,
  AppShellSidebarFooter,
  AppShellSidebarHeader
} from "../components/shared/AppShell";
import { DarkModeSwitch } from "../components/shared/DarkModeSwitch";
import { ProfileMenu } from "../components/auth/ProfileMenu";
import { UserSearch } from "../components/user/UserSearch";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavItem from "../components/shared/NavItem";
import { Logo } from "../components/shared/Logo";
import { FiGrid, FiMessageCircle, FiSettings, FiUser, FiUsers } from "react-icons/fi";

const links = [
/*   { href: "/admin", label: "Dashboard", icon: FiGrid },
  { href: "/admin/users", label: "Users", icon: FiUsers },
  { href: "/admin/profile", label: "Profile", icon: FiUser }, */
  { href: "/admin/database", label: "Dados CNPJ", icon: FiMessageCircle },
  /* { href: "/admin/websocket", label: "Tasks", icon: FiClipboard }, */
  /* { href: "/404", label: "404 Page", icon: FiSettings } */
];

function AdminLayout() {
  return (
    <AppShell>
      <AppShellSidebar>
        <AppShellSidebarHeader>
          <Stack spacing={4} mb='5'>
            {/* <Button
              as={NavLink}
              justifyContent="left"
              leftIcon={<ArrowBackIcon />}
              to="/"
              variant="ghost"
            >
              Home Page
            </Button> */}
            {/* <Logo /> */}
            <img src="/dataleads.png" alt="logo" />
          </Stack>
        </AppShellSidebarHeader>
        <AppShellSidebarBody>
          <Stack spacing={2}>
            {links.map((link) => (
              <NavItem key={link.href} href={link.href} icon={link.icon}>
                {link.label}
              </NavItem>
            ))}
          </Stack>
        </AppShellSidebarBody>
        <AppShellSidebarFooter>
          {/* <Stack spacing={4} mb='5'>
            <Button
              as={NavLink}
              justifyContent="left"
              leftIcon={<ArrowBackIcon />}
              to="/"
              variant="ghost"
            >
              Home Page
            </Button>
          </Stack> */}
          <ProfileMenu />
        </AppShellSidebarFooter>
      </AppShellSidebar>
      <AppShellContent>
        <AppShellContentHeader>
          <Stack direction="row" spacing={2} mr="-2">
            <UserSearch />
            <DarkModeSwitch />
          </Stack>
        </AppShellContentHeader>
        <AppShellContentBody>
          <Outlet />
        </AppShellContentBody>
      </AppShellContent>
    </AppShell>
  );
}

export { AdminLayout };
