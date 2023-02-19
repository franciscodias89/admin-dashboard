import { BiCog, BiExit, BiMoon, BiSun, BiUser } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import * as c from "@chakra-ui/react"
import { Limiter } from "./Limiter"
import { LinkButton } from "./LinkButton"
import { Link, useNavigate } from "react-router-dom"
import { useProfile } from "../../hooks/auth/useProfile";
import { useAuth } from "../../providers/AuthProvider";
import { DarkModeSwitch } from "./DarkModeSwitch"
import { useSignOut } from "../../hooks/auth/useSignOut"
import { useToast } from "@chakra-ui/react"

const Nav = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = c.useColorMode()
  const isDark = colorMode === "dark"
  const { session } = useAuth();
  const { data: profile } = useProfile(session?.user.email);
  const signOut = useSignOut();
  const toast = useToast();

  const handleSignOut = () => {
    signOut.mutate(undefined, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: () => {
        toast({
          description:
            "Something went wrong! If the problem persists, contact us!",
          status: "error"
        });
      }
    });
  };

  return (
    <c.Box
      w="100%"
      pos="fixed"
      top={0}
      left={0}
      borderBottom="1px solid"
      borderColor={c.useColorModeValue("gray.100", "gray.700")}
      zIndex={500}
    >
      <Limiter
        display="flex"
        transition="200ms all"
        py={{ base: 4, md: 3 }}
        bg={c.useColorModeValue("white", "gray.800")}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        {/* Left link list */}
        <c.HStack spacing={8}>
          <Link to="/">
            DevConnector 🚀
          </Link>
          <Link to="/posts">Posts</Link>
        </c.HStack>

        {/* Right link list */}

        {!profile && (
          <c.Fade in>
            <c.HStack spacing={4} display={{ base: "none", md: "flex" }}>
              <LinkButton to="/login" variant="ghost">
                Login
              </LinkButton>
              <LinkButton to="/signup" variant="solid" colorScheme="purple">
                Register
              </LinkButton>
              <DarkModeSwitch />
            </c.HStack>
          </c.Fade>
        )}

        {/* Right menu list */}
        <c.Menu placement="bottom-end" closeOnSelect closeOnBlur>
          <c.MenuButton
            as={c.IconButton}
            display={{ base: "flex", md: profile ? "flex" : "none" }}
            p={0}
            colorScheme={profile ? "gray" : undefined}
            borderRadius="full"
            icon={
              profile ? (
                <c.Avatar
                  size="sm"
                  color="black"
                  boxSize="35px"
                  bg="purple.50"
                  src='https://100k-faces.glitch.me/random-image'

                />
              ) : (
                <c.Box as={GiHamburgerMenu} />
              )
            }
          />

          <c.MenuList fontSize="md">
            {profile ? (
              <>
                <Link to="/admin/profile">
                  <c.MenuItem icon={<c.Box as={BiUser} boxSize="16px" />}>Profile</c.MenuItem>
                </Link>

                <Link to="/admin">
                  <c.MenuItem icon={<c.Box as={BiCog} boxSize="16px" />}>Admin</c.MenuItem>
                </Link>

                <c.MenuDivider />
                <c.MenuItem
                  closeOnSelect={false}
                  icon={<c.Box as={isDark ? BiSun : BiMoon} boxSize="16px" />}
                  onClick={toggleColorMode}
                >
                  Toggle theme
                </c.MenuItem>
                <c.MenuDivider />

                <c.MenuItem
                  onClick={handleSignOut}
                  icon={<c.Box as={BiExit} boxSize="16px" />}
                >
                  Logout
                </c.MenuItem>
              </>
            ) : (
              <>
                <c.MenuItem
                  closeOnSelect={false}
                  icon={<c.Box as={isDark ? BiSun : BiMoon} boxSize="16px" />}
                  onClick={toggleColorMode}
                >
                  Toggle theme
                </c.MenuItem>
                <c.MenuDivider />
                <Link to="/login">
                  <c.MenuItem>Login</c.MenuItem>
                </Link>
                <Link to="/register">
                  <c.MenuItem fontWeight="semibold">Register</c.MenuItem>
                </Link>
              </>
            )}
          </c.MenuList>
        </c.Menu>
      </Limiter>
    </c.Box>
  )
}

export default Nav