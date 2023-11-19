import "./Header.css";
import {
  FaCartShopping,
  FaSistrix,
  FaPhone,
  FaRegUser,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Button,
  Box,
  Link,
  Heading,
  Image,
  HStack,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";

const NavContact = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      <HStack
        spacing={8}
        display={isLargerThanMd ? "flex" : "none"}
        justifyContent="flex-end"
      >
        <Link variant="NavContact" fontSize="15px" p={2} style={linkStyle} _hover={{ ...linkHoverStyle }}>
          <FaRegUser style={iconStyle} color="orange" /> Mi cuenta
        </Link>
        <Link variant="NavContact" fontSize="15px" p={2} style={linkStyle} _hover={{ ...linkHoverStyle }}>
          <FaPhone style={iconStyle} color="orange" /> 0800-888-1234
        </Link>
        <Link variant="NavContact" fontSize="15px" p={2} style={linkStyle} _hover={{ ...linkHoverStyle }}>
          <FaWhatsapp style={iconStyle} color="green" /> +54375446563
        </Link>
      </HStack>
    </>
  );
};

const iconStyle = {
  width: "18px",
  height: "18px",
  marginRight: "4px",
  transition:
    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out"
};
const linkHoverStyle = {
  transform: "translateY(-3px)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Agrega sombra suave
  border: "1px solid #ddd", // Agrega borde
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
};

const Header = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      {/* Linea de cuenta,whatsapp y telefono */}
      <HStack ml="auto">
        <Heading ml="auto">
          <NavContact />
        </Heading>
      </HStack>
      {/* linea de la marca la busqueda y el carrito */}
      <Box as="header">
        <HStack
          order={{ md: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          h={"10rem"}
        >
          <Link
            fontSize={{ base: "1.75rem", md: "2rem" }}
            variant="logo"
            style={linkStyle}
          >
            <Image src={"./logo.png"} alt="Logo" />
            LogStore
          </Link>
          {isLargerThanMd ? (
            <HStack alignItems="center" flex="0.6">
              <Input
                type="text"
                placeholder="Buscar"
                size="md"
                border="solid 1px grey"
                _focus={{ border: "none" }}
                color="gray.700"
              />
              <Button
                // _hover={{ color: "cyan" }}
                borderColor="#ffffff20"
                color="white"
                background="orange"
                variant="outline"
              >
                <FaSistrix size="1.5rem" />
              </Button>
            </HStack>
          ) : null}

          <Button
            _hover={{ ...linkHoverStyle }}
            borderColor="#ffffff"
            color="orange"
            variant="outline"
            mr={'5px'}
          >
            <FaCartShopping size="2.5rem" />
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export { Header };
