import React from 'react';
import {Box, Checkbox} from 'native-base';

export const MCheckbox = function () {
  return (
      <Box
          p={4}
      variant="componentDemo"
      rounded="full"
      _light={{bg: 'red.100'}}
      _dark={{bg: 'red.800'}}
      opacity={0.5}>
      <Checkbox colorScheme="red" isChecked value="" />
    </Box>
  );
};
