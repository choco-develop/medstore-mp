export const isValidImage = (imageFile) => {
  if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
    return false;
  }
  return true;
};

export const FormatFile = (file) => {
  const formData = new FormData();
  formData.append('file', file, file.name);
  return formData;
};
