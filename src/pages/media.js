import React, { useState, useEffect } from 'react';
import { storage, db } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import '../styles/media.css';
import { NavLink } from 'react-router-dom';

function MediaPage() {
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    refreshFiles();
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!uploadFile) return;

    const storageRef = ref(storage, `uploads/${uploadFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, uploadFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, 'uploads'), {
          name: uploadFile.name,
          url: downloadURL,
          timestamp: new Date(),
          type: 'file'
        });
        setUploadFile(null);
        setUploadProgress(0);
        refreshFiles();
      }
    );
  };

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    if (!newFolderName) return;

    await addDoc(collection(db, 'uploads'), {
      name: newFolderName,
      timestamp: new Date(),
      type: 'folder'
    });
    setNewFolderName('');
    refreshFiles();
  };

  const refreshFiles = async () => {
    const q = query(collection(db, 'uploads'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const files = [];
    querySnapshot.forEach((doc) => {
      files.push({ id: doc.id, ...doc.data() });
    });
    setUploadedFiles(files);
  };

  const filteredFiles = uploadedFiles.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main>
        <UploadForm 
          uploadFile={uploadFile}
          setUploadFile={setUploadFile}
          handleUpload={handleUpload}
          uploadProgress={uploadProgress}
        />
        <CreateFolderForm 
          newFolderName={newFolderName}
          setNewFolderName={setNewFolderName}
          handleCreateFolder={handleCreateFolder}
        />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FileList files={filteredFiles} />
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

function UploadForm({ uploadFile, setUploadFile, handleUpload, uploadProgress }) {
  return (
    <section className="upload-form">
      <form onSubmit={handleUpload}>
        <label htmlFor="fileInput" className="file-upload-btn">
          <i className="material-icons add-icon">add_circle</i>
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*, video/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => setUploadFile(e.target.files[0])}
          style={{ display: 'none' }}
        />
        {uploadFile && (
          <button type="submit" className="upload-btn">Upload</button>
        )}
        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      </form>
    </section>
  );
}

function CreateFolderForm({ newFolderName, setNewFolderName, handleCreateFolder }) {
  return (
    <section className="create-folder-form">
      <input
        type="text"
        placeholder="New Folder Name"
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
      />
      <button onClick={handleCreateFolder} className="create-folder-btn">Create Folder</button>
    </section>
  );
}

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search files"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
}

function FileList({ files }) {
  return (
    <section className="file-list">
      <h2>Files</h2>
      <div className="folder-container">
        {files.length > 0 ? (
          files.map((file, index) => (
            <div className="folder" key={index}>
              <i className="material-icons">
                {file.type === 'folder' ? 'folder' : 'insert_drive_file'}
              </i>
              <h3>{file.name}</h3>
            </div>
          ))
        ) : (
          <p>No files found.</p>
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














