const os = require('os');
const path = require('path');

const platform = os.platform();
if (platform !== 'linux') {
  console.error('Unsupported platform.');
  process.exit(1);
}

const arch = os.arch();
if (arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

const dir = path.join(__dirname, 'bin', platform, arch);

const ffmpeg = path.join(dir, 'ffmpeg');
const ffplay = path.join(dir, 'ffplay');
const ffprobe = path.join(dir, 'ffprobe');
const melt = path.join(dir, 'melt');
const qmelt = path.join(dir, 'qmelt');
const shotcut = path.join(dir, 'shotcut');

module.exports = { ffmpeg, ffplay, ffprobe, melt, qmelt, shotcut };
