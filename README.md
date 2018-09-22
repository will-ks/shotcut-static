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

Returns the path of a statically linked Shotcut app installation on the local filesystem. Path contains shotcut, ffmpeg, ffplay, ffprobe, melt, qmelt.

```js
var shotcut = require('shotcut-static');
console.log(shotcut.path);
// /home/will/Documents/Shotcut/Shotcut.app
```

## Sources of the binaries

[The build script](build/index.sh) downloads the latest binary release from [https://github.com/mltframework/shotcut](https://github.com/mltframework/shotcut)

## Building the project

The `tar` CLI executable needs to be installed.
