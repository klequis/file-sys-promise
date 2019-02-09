export const makeDir = async (dirName) => {
  try {
    const data = await fsp.mkdir(dirName)
    return true
  }
  catch (err) {
    red('ERROR (fileSys.makeDir)', err)
    return false
  }
}
