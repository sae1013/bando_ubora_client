export const getPathName = (path) => {
  if(path ==='/'){
    return ''
  }
  return path.slice(1)
}