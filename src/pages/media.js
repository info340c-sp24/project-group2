import React from 'react';
import '../styles/media.css';
import { NavLink } from 'react-router-dom';

function MediaPage({ recentUploads = [], olderFiles = [] }) {
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

export default MediaPage;

function Header() {
  return (
    <header>
      <NavLink to="/homepage" className="home-icon" aria-label="Go to homepage">
        <span className="material-icons home-icon">home</span>
      </NavLink>
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
          <>
            <div className="folder"><i className="material-icons">folder</i><h3>Week 1</h3></div>
            <div className="folder"><i className="material-icons">folder</i><h3>Week 2</h3></div>
            <div className="folder"><i className="material-icons">folder</i><h3>Week 3</h3></div>
            <div className="folder"><i className="material-icons">folder</i><h3>Week 4</h3></div>
          </>
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
          <>
            <div className="folder"><i className="material-icons">folder</i><h3>Winter 2023</h3></div>
            <div className="folder"><i className="material-icons">folder</i><h3>Spring 2023</h3></div>
            <div className="folder"><i className="material-icons">folder</i><h3>Fall 2023</h3></div>
            <div className="folder"><i className="material-icons">folder</i><h3>Winter 2024</h3></div>
          </>
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

