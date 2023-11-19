import {
  Button,
  Badge, Text, Image, Box,
  HStack, Divider, Grid,
  GridItem, SimpleGrid,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  VStack,
  Table, Tbody, Tr, Td
} from "@chakra-ui/react";

import { FaTruck, FaRegCreditCard } from "react-icons/fa6";

const Pagos = [
  './banelco@2x.png',
  './mastercard@2x.png',
  './mercadopago@2x.png',
  './pagofacil@2x.png',
  './rapipago@2x.png',
  './tarjeta-naranja@2x.png',
  './visa@2x.png'
]

const datos = [
  { item: 'Marca', descripcion: 'Banghó' },
  { item: 'SKU', descripcion: 'B17D0KFGB1DC110' },
  { item: 'Certificado Seguridad', descripcion: 'LCS-2058' },
  { item: 'Ente Certificador', descripcion: 'LENOR' },
  { item: 'Modelo', descripcion: 'Cross B02' },
  { item: 'Garantía', descripcion: '1 año' },
  { item: 'Origen', descripcion: 'Ensamblado en Argentina' },
  { item: 'Tamaño de Pantalla', descripcion: '21.5´´' },
  { item: 'Tiempo de respuesta', descripcion: '60hz' },
  { item: 'Resolución', descripcion: '1920 x 1080 FULL HD' },
  { item: 'Familia del Procesador', descripcion: 'Intel Core i3' },
  { item: 'Generación', descripcion: '10ma generación' },
  { item: 'Modelo del Procesador', descripcion: 'Core i3-10100' },
  { item: 'Lector de memorias', descripcion: 'No posee' },
  { item: 'Grabadora/Lectora DVD/CD', descripcion: 'No posee' },
  { item: 'Puerto Auricular / Micrófono', descripcion: 'Jack 3.5 mm' },
  { item: 'Placa de red Ethernet', descripcion: '10/100/1000Mb' },
  { item: 'Placa de red Wi-Fi', descripcion: 'Sí' },
  { item: 'Bluetooth', descripcion: 'No posee' },
  { item: 'USB Frontales', descripcion: 'USB 2.0 x 2' },
  { item: 'USB Traseros', descripcion: 'USB 3.0 x 2, USB 2.0 x 4' },
  { item: 'Salida de video', descripcion: 'HDMI x 1' },
  { item: 'Dimensiones', descripcion: '99 x 295 x 365 mm (Gabinete)' },
  { item: 'Color', descripcion: 'Negro' },
  { item: 'Material', descripcion: 'Metal y Plástico' },
  { item: 'Memoria RAM', descripcion: '8GB' },
  { item: 'Tecnología', descripcion: 'DDR4 2666MHZ' },
  { item: 'Expandible', descripcion: 'Sí, hasta 32GB' },
  { item: 'Cantidad de Slots', descripcion: '1 Zócalo Libre - 1 Zócalo Ocupado' },
];

const mainImageSrc = './bangogral.png'; // Ruta de la imagen principal
function Body() {
  return (
    <>
      <HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={2}>
          {/* Seccion de Imagen */}
          <Box display={'flex'} flexDirection='column' alignItems={'center'}>
            <Badge
              variant="outline"
              colorScheme="orange"
              borderRadius="10px"
              p="5px"
              mt="5px"
              ml="5px"
              h='fit-content'
              w='fit-content'
              color='black'
            >
              Envios Gratis
            </Badge>
            {/* muestro la imagen principal */}
            <Image
              objectFit='cover'
              w={{
                base: 'md',
                md: 'xl',
                lg: '2xl',
              }}
              src={mainImageSrc}
              alt="PC Bangho"
              p={2}
            />
            {/* muestro los thumnails */}
            <HStack direction='row' spacing={10}>
              <Image
                boxSize='25px'
                objectFit='cover'
                src='./bango1.png'
                alt='img1'
                _hover={{ opacity: 0.7, cursor: 'pointer' }}
              />
              <Image
                boxSize='25px'
                objectFit='cover'
                src='./bango2.png'
                alt='img2'
                _hover={{ opacity: 0.7, cursor: 'pointer' }}
              />
              <Image
                boxSize='25px'
                objectFit='cover'
                src='./bango3.png'
                alt='img3'
                _hover={{ opacity: 0.7, cursor: 'pointer' }}
              />

            </HStack>
          </Box>
          <VStack>
            {/* titulo */}
            <Box h='fit-content' display={'flex'} flexDirection='column'>
              <Text fontSize={{ base: 'md', md: 'xl', lg: '2xl' }} as="b">
                Pc Completa Banghó Cross B02 Core i5 8GB SSD 480GB 22 FHD Windows 11
              </Text>
            </Box>

            <Box display={"flex"} flexDirection="column"
              mr={{ base: "auto", sm: '60%' }}>
              <Text fontSize={{ base: '18px', md: '20px', lg: '24px' }}
                as="del">
                $ 699.999{" "}
              </Text>
              <Text fontSize={{ base: '20px', md: '22px', lg: '26px' }} as="b" color={"red"}>
                $ 594.999{" "}
                <Badge
                  variant="outline"
                  colorScheme={"orange"}
                  borderRadius="8px"
                  border="2px solid orange"
                  p="5px"
                  m="5px"
                  color="black"
                  fontSize={{ base: '16px', md: '20px', lg: '22px' }}
                >
                  -15% OFF
                </Badge>
                <br />                
              </Text>
              <Text fontSize='18px'>
                <span > Stock : </span> {' '}
                <span style={{ fontWeight: 'bold' }}>20 Unidades</span>
              </Text>
            </Box>

            <Box display={'flex'} flexDirection='column'
              border='1px'
              borderColor={'orange'}
              mt='5px'
              mr='10px'
              p={'10px'}>
              <Text as={'b'} fontSize='md'>Opciones de pago</Text>

              <Text fontSize='md'>
                <span style={{ fontWeight: 'bold' }}> 6 </span> cuotas sin intereses de{' '}
                <span style={{ fontWeight: 'bold' }}>$ 99.167</span>
              </Text>
              {/* aca muestro los medios de pago */}
              <HStack spacing={4} mt={2} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                {Pagos.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Pago ${index + 1}`}
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '25px' }}
                  />
                ))}
              </HStack>
              <Divider py={2} />
              <Text fontSize='md'>
                <span style={{ fontWeight: 'bold' }}> 12 </span> cuotas fijas de{' '}
                <span style={{ fontWeight: 'bold' }}>$ 55.403,00</span>
              </Text>
            </Box>
            {/* grid para calculo de envio y cuotas  */}
            <Grid templateColumns='repeat(8, 1fr)' gap={2} mt={5}>
              <GridItem colSpan={0} h='10' ml={4} mt={2} >
                <FaTruck size={'2rem'} color='orange' />
              </GridItem>
              <GridItem colSpan={2} h='10' ml={-2} >
                <Text maxWidth={20} fontSize='14px' fontWeight={'bold'}>Calcular Envios</Text>
              </GridItem>
              <GridItem colStart={4} h='10' ml={4} mt={2} >
                <FaRegCreditCard size={'2rem'} color='orange' />
              </GridItem>
              <Text maxWidth={20} fontSize='14px' fontWeight={'bold'}>Calcular Cuotas</Text>
            </Grid>
            <Button w={'90%'} m='auto'
              backgroundColor={'#F0AC29'} fontSize={'medium'}
              color='white'>
              Agregar al carrito
            </Button>
          </VStack>
          <Tabs isFitted='true' >
            <TabList color={'grey'}>
              <Tab>Descripcion</Tab>
              <Tab>Ficha Técnica</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text py="2">
                  A toda la potencia de una PC Banghó Cross B02 i5 le sumamos un
                  Monitor de 22 Pulgadas Full HD para que no tengas que adquirirlo
                  aparte, llévate un equipo completo listo para utilizar. Equipada con
                  Procesador Intel Core i5 de 10ma Generación y Windows 11.
                </Text>
              </TabPanel>
              <TabPanel>
                <Table variant="unstyled">
                  <Tbody>
                    {datos.map((dato, index) => (
                      <Tr h={'10px'} key={index}>
                        <Td >{dato.item}</Td>
                        <Td fontWeight={'bold'}>{dato.descripcion}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SimpleGrid>
      </HStack>
    </>
  );
}

export { Body };
