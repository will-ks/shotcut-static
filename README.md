# shotcut-static

**Installs static binaries of Shotcut video editor, including Melt Framework.**
Includes binaries of ffmpeg, ffplay, ffprobe, melt, qmelt, shotcut.

Currently only supports Linux (64-bit).

Forked from [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static#readme) by Eugene Ware.

## Installation

This module is installed via npm:

```bash
$ npm install shotcut-static
```

## Example Usage

Returns the paths of statically linked binaries from the Shotcut installation on the local filesystem. Path contains shotcut, ffmpeg, ffplay, ffprobe, melt, qmelt.

```js
const shotcutStatic = require('shotcut-static');

console.log(shotcutStatic.ffmpeg);
// /home/will/my-app/node_modules/shotcut-static/bin/linux/x64/ffmpeg

console.log(shotcutStatic.ffplay);
// /home/will/my-app/node_modules/shotcut-static/bin/linux/x64/ffplay

console.log(shotcutStatic.ffprobe);
// /home/will/my-app/node_modules/shotcut-static/bin/linux/x64/ffprobe

console.log(shotcutStatic.melt);
// /home/will/my-app/node_modules/shotcut-static/bin/linux/x64/melt

console.log(shotcutStatic.qmelt);
// /home/will/my-app/node_modules/shotcut-static/bin/linux/x64/qmelt

console.log(shotcutStatic.shotcut);
// /home/will/my-app/node_modules/shotcut-static/bin/linux/x64/shotcut
```

## Sources of the binaries

[The build script](build/index.sh) downloads the latest binary release from [https://github.com/mltframework/shotcut](https://github.com/mltframework/shotcut)

## Building the project

The `tar` CLI executable needs to be installed.
