export const readFile = async (fullFileName) => {
  try {
    return await fsp.readFile(fullFileName)
  }
  catch (err) {
    red('ERROR (fileSys.readFile)', err)
  }
}