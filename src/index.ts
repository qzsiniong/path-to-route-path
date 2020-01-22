function pathToRoutePath(path: string) {
  return path
    .replace('./', '/')
    .replace('.route.tsx', '')
    .replace(/_/g, ':')
    .replace(/-([a-zA-Z0-9]+)/g, ':$1?')
    .replace(/([^/]):/g, '$1/:')
    .replace(/(\/|^)[A-Z]/g, it => it.toLowerCase())
    .replace(/[A-Z]/g, it => '_' + it.toLowerCase())
    .replace(/:[_a-z][a-z0-9_]*/g, it =>
      it.replace(/_[a-z]/g, a => a[1].toUpperCase()),
    )
    .replace(/index$/, '');
}

export default pathToRoutePath;
