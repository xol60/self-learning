import React, { useState, useEffect } from 'react';
import { Table, Button, Progress } from 'antd';
const ipcRenderer = window.require('electron').ipcRenderer;

function App() {
  const [progress, setProgress] = useState({});
  const [left, setLeft] = useState({});

  useEffect(() => {
    ipcRenderer.send('start-downloads');

    ipcRenderer.on('download-progress', (event, { filename, progress, left }) => {
      setProgress((prevProgress) => ({
        ...prevProgress,
        [filename]: progress,
      }));
      setLeft((prevLeft) => ({
        ...prevLeft,
        [filename]: left,
      }));
    });

    ipcRenderer.on('download-complete', (event, filePaths) => {
      alert('Downloads complete:', filePaths);
    });

    ipcRenderer.on('download-error', (event, errorMessage) => {
      alert('Download error:', errorMessage);
    });

    return () => {
      ipcRenderer.removeAllListeners('download-progress');
      ipcRenderer.removeAllListeners('download-complete');
      ipcRenderer.removeAllListeners('download-error');
    };
  }, []);

  const columns = [
    {
      title: 'Filename',
      dataIndex: 'filename',
      key: 'filename',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (text) => <Progress percent={text} />,
    },
    {
      title: 'Time Left',
      dataIndex: 'left',
      key: 'left',
    },
  ];

  const data = Object.keys(progress).map((filename) => ({
    key: filename,
    filename,
    progress: progress[filename],
    left: left[filename],
  }));

  return (
    <div className="App">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
