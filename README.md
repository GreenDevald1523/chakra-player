# chakra-player  `v1.0`
React player, made with [`Chakra UI`](https://chakra-ui.com/), can play the audio that you push in it.

### Usage

```shell
npm install ChakraPlayer 

OR

yarn add ChakraPlayer
```

```shell
import React from 'react'
import ChakraPlayer from 'chakra-player'

// Add {.mp3 / .mp4} file format
<ChakraPlayer url='****.mp3' />
```

Instead of using a common `url` of a `.mp3`, you also can download this file to your project folder and refer to it:

```shell 
import React from 'react'
import ChakraPlayer from 'chakra-player'
import song form './audio.mp3'

// Add {.mp3 / .mp4} file format
<ChakraPlayer url={song} />
```

### Props

Prop | Description | Default
---- | ----------- | -------
`url` | The url or file of an audio that has to be in `.mp3/.mp4` format

### Demo

Try demo version of a player [`over here`](https://greendevald1523.github.io/player/)
