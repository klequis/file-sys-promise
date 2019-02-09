export const renameFile = async (oldName, newName) => {
  try {
    const d = await fsp.rename(oldName, newName)
    // console.log('data', d)
    return true
  }
  catch (err) {
    red('ERROR (fileSys.renameFile)', err)
    throw err
  }
}