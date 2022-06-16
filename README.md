# ChakraPlayer  `v1.0`
React player, made with [`Chakra UI`](https://chakra-ui.com/), can play the audio that you push in it.

### Usage

```shell
npm install ChakraPlayer 

OR

yarn add ChakraPlayer
```

```shell
import React from 'react'
import ChakraPlayer from 'ChakraPlayer'

// Add {.mp3 / .mp4} file format
<ChakraPlayer url='****.mp3' />
```

### Props

Prop | Description | Default
---- | ----------- | -------
`url` | The url of an audio that has to be in `.mp3/.mp4` format

Instead of using a common `url` of a `.mp3`, you also can download this file to your project folder and refer to it:

```shell 
import React from 'react'
import ChakraPlayer from 'ChakraPlayer'
import song form './audio.mp3'

// Add {.mp3 / .mp4} file format
<ChakraPlayer url={song} />
```

### Demo

Try demo version of a player [`over here`](https://greendevald1523.github.io/player/)
