import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListSettingComponent from './Component/ListSettingComponent';
import ListViewerComponent from './Component/ListViewerComponent';

const App: React.FC<{}> = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // アクティブなタブを切り替えるハンドラー
  const handleTabChange = (index: number) => {
    setActiveTab(prevTab => (prevTab === index ? null : index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div>
          {/* タブの表示 */}
          <ul>
            <li
              onClick={() => handleTabChange(0)}
              className={activeTab === 0 ? 'active' : ''}
            >
              Tab 1
            </li>
            <li
              onClick={() => handleTabChange(1)}
              className={activeTab === 1 ? 'active' : ''}
            >
              Tab 2
            </li>
          </ul>

          {/* 選択されたタブのコンポーネントを表示 */}
          {activeTab === 0 && <ListSettingComponent />}
          {activeTab === 1 && <ListViewerComponent />}
        </div>
      </body>
    </div>
  );
};

export default App;