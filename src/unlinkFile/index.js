export const unlinkFile = async (fullFileName) => {
  try {
    return await fsp.unlink(fullFileName)
  }
  catch (err) {
    red('ERROR (fileSys.unlinkFile)', err)
  }
}