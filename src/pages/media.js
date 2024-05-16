import React from 'react';
import '../styles/media.css';

function Media({ recentUploads = [], olderFiles = [] }) {
  return (
    <div>
      <Header />
      <main>
        <UploadForm />
        <RecentUploads recentUploads={recentUploads} />
        <OlderFiles olderFiles={olderFiles} />
      </main>
      <Footer />
    </div>
  );
}

export default Media;

function Header() {
  return (
    <header>
      <a href="/homepage" className="home-icon" aria-label="Go to homepage">
        <span className="material-icons home-icon">home</span>
      </a>
      <h1>Media Upload</h1>
    </header>
  );
}

function UploadForm() {
  return (
    <section className="upload-form">
      <label htmlFor="fileInput" className="file-upload-btn">
        <i className="material-icons add-icon">add_circle</i>
      </label>
      <input type="file" id="fileInput" accept="image/*, video/*" style={{ display: 'none' }} />
    </section>
  );
}

function RecentUploads({ recentUploads }) {
  return (
    <section className="recent-uploads">
      <h2>Recent Uploads</h2>
      <div className="folder-container">
        {recentUploads.length > 0 ? (
          recentUploads.map((upload, index) => (
            <div className="folder" key={index}>
              <i className="material-icons">folder</i>
              <h3>{upload}</h3>
            </div>
          ))
        ) : (
          <p>No recent uploads.</p>
        )}
      </div>
    </section>
  );
}

function OlderFiles({ olderFiles }) {
  return (
    <section className="older-files">
      <h2>Older Files</h2>
      <div className="folder-container">
        {olderFiles.length > 0 ? (
          olderFiles.map((file, index) => (
            <div className="folder" key={index}>
              <i className="material-icons">folder</i>
              <h3>{file}</h3>
            </div>
          ))
        ) : (
          <p>No older files.</p>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2024. All rights reserved.</p>
    </footer>
  );
}





