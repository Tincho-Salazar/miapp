import { Box, Flex, HStack, Text, Input, Button, Link, Image, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  return (
    <Box bg="#2D2825" p={8} color="white">
      {/* Primera línea */}
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Box>
          {/* Logo y nombre */}
          <Link fontSize='24px' variant="logo" style={linkStyle}>
            <Image src="./public/logo.png" alt="Logo" width='50px' height='50px' />
            LogStore
          </Link>
        </Box>

        {/* Redes sociales */}
        <HStack spacing={4}>
          <VStack align="center">
            <Text fontSize="sm" fontWeight="bold">Facebook</Text>
            <Link href="#" target="_blank">
              <FaFacebook color="#1877F2" />
            </Link>
          </VStack>

          <VStack align="center">
            <Text fontSize="sm" fontWeight="bold">Twitter</Text>
            <Link href="#" target="_blank">
              <FaTwitter color="#1DA1F2" />
            </Link>
          </VStack>

          <VStack align="center">
            <Text fontSize="sm" fontWeight="bold">Instagram</Text>
            <Link href="#" target="_blank">
              <FaInstagram color="#E4405F" />
            </Link>
          </VStack>
        </HStack>

        {/* Input de email y botón enviar */}
        <Flex>
          <Input
            type="email"
            placeholder="Correo electrónico"
            size="md"
            border="solid 1px grey"
            _focus={{ border: "none" }}
            color="gray.700"
            bg="white" // Fondo blanco
            mr={2}
          />
          <Button
            colorScheme="orange" // Botón de color naranja
          >
            Enviar
          </Button>
        </Flex>
      </Flex>

      {/* Segunda línea con 5 columnas */}
      <Flex justifyContent="space-between">
        <VStack align="flex-start" spacing={2} mr={8}>
          <Text fontWeight="bold">Acerca de Nosotros</Text>
          <Link href="#">Quienes somos</Link>
          <Link href="#">Terminos y Condiciones</Link>
        </VStack>

        <VStack align="flex-start" spacing={2} mr={8}>
          <Text fontWeight="bold">Postventa y Contactenos</Text>
          <Link href="#">Política de Devoluciones</Link>
          <Link href="#">Contacto</Link>
        </VStack>

        <VStack align="flex-start" spacing={2} mr={8}>
          <Text fontWeight="bold">Tienda Online</Text>
          <Link href="#">Mi cuenta</Link>
          <Link href="#">Atencion al Cliente</Link>
          <Link href="#">Formas de Pago</Link>
          <Link href="#">Costos y Formas de Envío</Link>
          <Link href="#">Políticas de Cambios y Devolución</Link>
          <Link href="#">Botón de Arrepentimiento</Link>
        </VStack>

        <VStack align="flex-start" spacing={2} mr={8}>
          <Text fontWeight="bold">Horarios</Text>
          <Text>Lunes a viernes de 9 a 18hs.</Text>
          <Text>Sábados de 9 a 13hs.</Text>
        </VStack>

        {/* Cuarta línea con información de contacto */}
        <VStack align="flex-start" mt={6}>
          <Text fontWeight="bold">Contacto</Text>
          <HStack>
            <Text>
              <FaEnvelope />
            </Text>
            <Text>info@logstore.com</Text>
          </HStack>
          <HStack>
            <Text>
              <FaPhone />
            </Text>
            <Text>0810-888-3444</Text>
          </HStack>
          <HStack>
            <Text>
              <FaWhatsapp />
            </Text>
            <Text>+543751446563</Text>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export { Footer };
