var it = require('tape'),
  fs = require('fs'),
  shotcut = require('..');

it('should find ffmpeg', function(t) {
  var stats = fs.statSync(shotcut.ffmpeg);
  t.ok(stats.isFile(shotcut.ffmpeg));
  t.end();
});

it('should find ffprobe', function(t) {
  var stats = fs.statSync(shotcut.ffprobe);
  t.ok(stats.isFile(shotcut.ffprobe));
  t.end();
});

it('should find ffplay', function(t) {
  var stats = fs.statSync(shotcut.ffplay);
  t.ok(stats.isFile(shotcut.ffplay));
  t.end();
});

it('should find melt', function(t) {
  var stats = fs.statSync(shotcut.melt);
  t.ok(stats.isFile(shotcut.melt));
  t.end();
});

it('should find qmelt', function(t) {
  var stats = fs.statSync(shotcut.qmelt);
  t.ok(stats.isFile(shotcut.qmelt));
  t.end();
});

it('should find shotcut', function(t) {
  var stats = fs.statSync(shotcut.shotcut);
  t.ok(stats.isFile(shotcut.shotcut));
  t.end();
});
