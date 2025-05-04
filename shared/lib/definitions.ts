export type ServerUploadFileType = {
  message: 'Success' | 'Failed';
  fileName?: string;
};

export type AddedServerResponseType = {
  message?: string;
  err?: string;
};
