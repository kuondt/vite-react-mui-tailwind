export const download = (filename: string, text: BlobPart) => {
  const blob = new Blob([text], { type: "application/xls" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

export const DownloadExcel = (bytesData, tenFile) => {
  var blob = new Blob([new Uint8Array(bytesData)],
    { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${tenFile}`;
  link.click();
}

export const downloadBlobFile = (filename: string, blob: Blob) => {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

export const downloadFileWord = (bytesData: number[], tenFile: string) => {
  var blob = new Blob([new Uint8Array(bytesData)],
      {  type: 'application/msword'});
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${tenFile}`;
  link.click();
};