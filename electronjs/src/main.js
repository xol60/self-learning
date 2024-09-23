const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const axios = require('axios');
const path = require('path')
const cheerio = require('cheerio');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow(
    {
    width:1200,
    height:800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL('http://localhost:3000'); // Assuming your React app runs on this URL
});

const downloadFiles = async (event, files) => {
  const downloadPromises = files.map(async ({ url, filename }) => {
    const filePath = path.join(app.getPath('downloads'), filename);
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      onDownloadProgress: (progressEvent) => {
        const totalLength = progressEvent.lengthComputable
          ? progressEvent.total
          : parseInt(progressEvent.target.getResponseHeader('content-length'), 10);
        const progress = Math.round((progressEvent.loaded * 100) / totalLength);

        const seconds = Math.round((totalLength - progressEvent.loaded) / progressEvent.rate);
        const date = new Date(0);
        const remainingSeconds = isNaN(seconds) ? 0 : seconds;
        date.setSeconds(remainingSeconds);
        const left = date.toISOString().substring(11, 19);

        event.reply('download-progress', { filename, progress, left });
      },
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(filePath));
      writer.on('error', reject);
    });
  });

  try {
    const filePaths = await Promise.all(downloadPromises);
    event.reply('download-complete', filePaths);
  } catch (error) {
    console.error('Download error:', error);
    event.reply('download-error', error.message);
  }
};
const fetchFilesFromAPI = async (event) => {
  try {
    const response = await axios.get('http://127.0.0.1:5500/index.html'); // Replace with actual API endpoint
    const $ = cheerio.load(response.data);
// Find all 'a' tags and extract their href and text
    const files = [];
    $('a').each((index, element) => {
        const url = $(element).attr('href');
        const filename = $(element).text();
        files.push({ url, filename });
    });
    console.log(files);
    downloadFiles(event, files);
  } catch (error) {
    event.reply('fetch-error', error.message);
  }
};
ipcMain.on('start-downloads', (event) => {

  // Call the download function immediately
  console.log("start download")
  fetchFilesFromAPI(event);

  // Set up interval to call the download function every 5 minutes
  //setInterval(() => downloadFiles(event, files), 300000);
});