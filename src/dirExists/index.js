export const dirExists = async (dirPath) => {
  try {
    await fsp.stat(dirPath)
    return true
  }
  catch (err) {
    // do not log an error
    // red('ERROR (fileSys.dirExists)', err)
    return false
  }
}