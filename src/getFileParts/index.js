const getFileExtension = (fullName) => {
  const len = fullName.length
  const lastDot = fullName.lastIndexOf('.')
  const extension = fullName.slice(lastDot + 1, len)
  return extension
}

const getFilePath = (fullName) => {
  const lastSlash = fullName.lastIndexOf('/')
  if (lastSlash === -1) {
    return ''
  }
  const path = fullName.slice(0, lastSlash)
  return path
}

const getFileName = (fullName) => {
  const lastSlash = fullName.lastIndexOf('/')
  const lastDot = fullName.lastIndexOf('.')

  const name = fullName.slice(lastSlash + 1, lastDot)
  return name
}

export const getFileParts = (fullName) => {
 try {
    return {
      path: getFilePath(fullName),
      name: getFileName(fullName),
      extension: getFileExtension(fullName)
    }
  }
  catch (err) {
    red('ERROR (fileSys.getFileParts)', err)
  }
}