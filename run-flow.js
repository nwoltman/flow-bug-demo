'use strict';

const {spawnSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'exampleModule.js');

const result = spawnSync(
  require('flow-bin'),
  ['check-contents', '--json', `--root=${__dirname}`, '--json-version=2', fileName],
  {
    cwd: __dirname,
    input: fs.readFileSync(fileName, 'utf8'),
    encoding: 'utf-8',
  }
);

console.log(result.error || result.stdout);
