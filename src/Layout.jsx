import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Box w="100vw" h="100vh">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
