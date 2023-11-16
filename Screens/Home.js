import React from 'react';
import {
  MCheckbox,
  MAvatar,
  MModal,
  MText,
  MDivider,
  MTransition,
} from '../Components';
import {
  Box,
  VStack,
  HStack,
  Pressable,
  useColorModeValue,
  Text,
} from 'native-base';

const Left = function () {
  return (
    <VStack>
      <Pressable
        flex={2}
        _light={{
          bg: {
            linearGradient: {
              colors: ['violet.800', 'lightBlue.300'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: ['violet.900', 'lightBlue.500'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}>
        <MAvatar />
      </Pressable>
      <Pressable
        flex={1}
        _light={{
          bg: {
            linearGradient: {
              colors: ['rose.400', 'orange.300'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: ['rose.600', 'orange.400'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}>
        <MText />
      </Pressable>
      <Pressable
        flex={1.5}
        _light={{
          bg: {
            linearGradient: {
              colors: ['indigo.400', 'red.200'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: ['indigo.500', 'red.200'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}>
        {/* <MModal /> */}
      </Pressable>
    </VStack>
  );
};
const Right = function () {
  return (
    <VStack>
      <Pressable flex={1}>
        {/* _light={{
          bg: {
            linearGradient: {
              colors: ['rose.400', 'red.200'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: ['rose.600', 'red.300'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }} */}
        <Box
          flex={1}
          _light={{
            bg: {
              linearGradient: {
                colors: ['rose.400', 'red.200'],
                start: [0, 0],
                end: [0, 1],
              },
            },
          }}
          _dark={{
            bg: {
              linearGradient: {
                colors: ['rose.600', 'red.300'],
                start: [0, 0],
                end: [0, 1],
              },
            },
          }}>
          {/* <MCheckbox /> */}
          <Text>akdlakmdlkasdklflkdfmkzdflk</Text>
        </Box>
      </Pressable>
      <Pressable
        flex={2}
        _light={{
          bg: {
            linearGradient: {
              colors: ['amber.400', 'yellow.200'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: ['amber.600', 'yellow.300'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}>
        {/* <MTransition /> */}
      </Pressable>
      <Pressable
        flex={1.5}
        _light={{
          bg: {
            linearGradient: {
              colors: ['fuchsia.400', 'violet.200'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: ['fuchsia.600', 'violet.300'],
              start: [0, 1],
              end: [1, 1],
            },
          },
        }}>
        <MDivider />
      </Pressable>
    </VStack>
  );
};
// const Example = function () {
//   return (
//     <HStack flex={1} justifyContent="space-around" alignItems="center">
//       <VStack>
//         <Pressable
//           flex={1}
//           _light={{
//             bg: {
//               linearGradient: {
//                 colors: ['rose.400', 'red.200'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           _dark={{
//             bg: {
//               linearGradient: {
//                 colors: ['rose.600', 'red.300'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           >
//           <MCheckbox />
//         </Pressable>
//         <Pressable flex={2} _light={{
//             bg: {
//               linearGradient: {
//                 colors: ['amber.400', 'yellow.200'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           _dark={{
//             bg: {
//               linearGradient: {
//                 colors: ['amber.600', 'yellow.300'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}>
//           {/* <MTransition /> */}
//         </Pressable >
//         <Pressable flex={1.5} _light={{
//             bg: {
//               linearGradient: {
//                 colors: ['fuchsia.400', 'violet.200'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           _dark={{
//             bg: {
//               linearGradient: {
//                 colors: ['fuchsia.600', 'violet.300'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}>
//           <MDivider />
//         </Pressable>
//       </VStack>
//       <VStack>
//         <Pressable  flex={2}  _light={{
//             bg: {
//               linearGradient: {
//                 colors: ['violet.800', 'lightBlue.300'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           _dark={{
//             bg: {
//               linearGradient: {
//                 colors: ['violet.900', 'lightBlue.500'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}>
//           <MAvatar />
//         </Pressable>
//         <Pressable flex={1} _light={{
//             bg: {
//               linearGradient: {
//                 colors: ['rose.400', 'orange.300'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           _dark={{
//             bg: {
//               linearGradient: {
//                 colors: ['rose.600', 'orange.400'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}>
//           <MText />
//         </Pressable>
//         <Pressable flex={1.5} _light={{
//             bg: {
//               linearGradient: {
//                 colors: ['indigo.400', 'red.200'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}
//           _dark={{
//             bg: {
//               linearGradient: {
//                 colors: ['indigo.500', 'red.200'],
//                 start: [0, 1],
//                 end: [1, 1],
//               },
//             },
//           }}>
//           {/* <MModal /> */}
//         </Pressable>
//       </VStack>
//     </HStack>
//   );}
const Home = function () {
  return (
    <HStack
      flex={1}
      justifyContent="space-around"
      alignItems="center"
      bg="green.200">
      {/* <Left /> */}
      <Right />
    </HStack>
  );
};
export {Home};
