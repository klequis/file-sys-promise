export const addTimestampToFileName = (fullName) => {
  try {
    const a = getFileParts(fullName)
    if (a.path === '') {
      return `${a.name}-${Date.now()}.${a.extension}`
    } else {
      return `${a.path}/${a.name}-${Date.now()}.${a.extension}`
    }
  }
  catch (err) {
    red('ERROR (fileSys.addTimestampToFileName)', err)
  }
}