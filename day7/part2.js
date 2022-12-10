import { input } from './input.js';
import { Directory, File } from './vfs.js';

// Treating input as a journal to rebuild the filesystem first
const entries = input.split(/\$\s/).map(c => c.split(/\n/).filter(i => !!i));
const root = new Directory('root', null);
let currentDirectory = root;

const parseEntry = (entry) => {
  if (!entry.length) return;
  const command = entry.shift();
  const results = entry;
  if (command.startsWith('cd')) {
    // change dir
    const name = command.split(/\s/)[1];
    if (name === '/') { 
      currentDirectory = root;
    } else if (name === '..') {
      currentDirectory = currentDirectory.getParent();
    } else {
      currentDirectory = currentDirectory.getChild(name);
    }
  } else if (command === 'ls') {
    results.forEach(r => {
      const parts = r.split(/\s/);
      if (parts[0] === 'dir') {
        const dir = new Directory(parts[1], currentDirectory);
        currentDirectory.addChildDirectory(dir);
      } else {
        const file = new File(parts[1], parts[0]);
        currentDirectory.addFile(file);
      }
    })
  }
}
// build the VFS
entries.forEach(e => parseEntry(e));

// a flat list of sizes
const sizes = [];

const scan = (dir) => {
  const name = dir.name;
  const size = dir.getSize(); // this includes own size and children sizes
  sizes.push(size);
  dir.getChildren().forEach(c => scan(c));
}

scan(root);
const disk = 70000000
const used = root.getSize();
const free = disk - used;
const updateSize = 30000000;
const minimumDeletedSize = updateSize - free;


const options = sizes.sort((a,b) => a - b).filter(s => s >= minimumDeletedSize);

console.log(options.shift());
