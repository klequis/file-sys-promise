export const fileExists = async (fullFileName) => {
  try {
    await fsp.stat(fullFileName)
    return true
  }
  catch (err) {
    red('ERROR (fileSys.fileExists)', err)
    return false
  }
}