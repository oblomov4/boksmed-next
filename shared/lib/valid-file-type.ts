export function validFileType(file: File) {
  const fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];
  for (let i = 0; i < fileTypes.length; i++) {
    if (file.type === fileTypes[i]) {
      return true;
    }
  }
  return false;
}
