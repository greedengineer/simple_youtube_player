import { BrowserWindow, app } from 'electron';

let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 640, height: 360+24, frame: false, useContentSize: true, resizable: false });
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/main.html');
    //mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
