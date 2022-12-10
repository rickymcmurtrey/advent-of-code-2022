// Virtual File System
export class Directory {
  name;
  files;
  parent;
  children;
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.files = [];
    this.children = [];
  }
  addFile (file) {
    this.files.push(file);
  }
  addChildDirectory (dir) {
    this.children.push(dir);
  }
  getParent() {
    return this.parent;
  }
  getChild(name) {
    return this.children.find(c => c.name === name);
  }
  getChildren() {
    return this.children;
  }
  getSize() {
    const ownSize = this.files.reduce((prev, curr) => { return prev + curr.size }, 0);
    return this.children.reduce((prev, current) => prev + current.getSize(), ownSize);
  }

}

export class File {
  name;
  size;
  constructor(name, size) {
    this.name = name;
    this.size = typeof size === 'string' ? parseInt(size) : size;
  }
}