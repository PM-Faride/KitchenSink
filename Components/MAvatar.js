import React from 'react';
import {Avatar} from 'native-base';

export const MAvatar = function () {
  return (
    <Avatar size="lg" _light={{bg: 'blue.300'}} _dark={{bg: 'blue.400'}}>
      <Avatar.Badge
        _light={{bg: 'green.300'}}
        _dark={{bg: 'green.400'}}
        borderWidth={0}
        boxSize={5}
      />
    </Avatar>
  );
};
