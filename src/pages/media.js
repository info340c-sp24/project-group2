import React, { useState, useEffect } from 'react';
import { storage, db } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import '../styles/media.css';
import { NavLink } from 'react-router-dom';
import ProfilePopUp from './profilepopup';

function MediaPage() {
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingFileId, setDeletingFileId] = useState(null); 
  const [deleteProgress, setDeleteProgress] = useState(0); 

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const q = query(collection(db, 'uploads'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const files = [];
    querySnapshot.forEach((doc) => {
      files.push({ id: doc.id, ...doc.data() });
    });
    setUploadedFiles(files);
  };

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
        });
        setUploadFile(null);
        setUploadProgress(0);
        fetchFiles(); // Refresh file list
      }
    );
  };

  const handleDelete = async (file) => {
    setDeletingFileId(file.id);
    const fileRef = ref(storage, `uploads/${file.name}`);

    const deleteTask = deleteObject(fileRef);

    const observer = {
      next: (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setDeleteProgress(progress);
      },
      error: (error) => {
        console.error('Error deleting file:', error);
        setDeletingFileId(null);
        setDeleteProgress(0);
      },
      complete: async () => {
        await deleteDoc(doc(db, 'uploads', file.id));
        setUploadedFiles((prevFiles) => prevFiles.filter((item) => item.id !== file.id));
        setDeletingFileId(null);
        setDeleteProgress(0);
        console.log(`File ${file.name} deleted successfully`);
      },
    };

    deleteTask.then(observer.complete).catch(observer.error);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFiles = uploadedFiles
    .filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="media-container">
      <Header />
      <main>
        <UploadForm 
          uploadFile={uploadFile}
          setUploadFile={setUploadFile}
          handleUpload={handleUpload}
          uploadProgress={uploadProgress}
        />
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <FileList files={filteredFiles} handleDelete={handleDelete} deletingFileId={deletingFileId} deleteProgress={deleteProgress} />
      </main>
      <Footer />
    </div>
  );
}

export default MediaPage;

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header>
      <NavLink to="/homepage" className="home-icon" aria-label="Go to homepage">
        <span className="material-icons home-icon">home</span>
      </NavLink>
      <h1>Media Upload</h1>
      <div className="nav-right">
        <div className="profile-icon" onClick={toggleProfile}>
          <span className="material-icons">person</span>
        </div>
      </div>
      {isProfileOpen && (
        <ProfilePopUp isOpen={isProfileOpen} onClose={toggleProfile} >
          <div className="profile-content">
              <h2>Jane Doe</h2>
              <p>Role: Student</p>
              <p>Username: nkanna</p>
              <p>Email: nkanna@uw.edu</p>
          </div>
        </ProfilePopUp>
      )}
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
          <button type="submit" className="upload-btn">Click to Upload</button>
        )}
        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      </form>
    </section>
  );
}

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search files"
        value={searchTerm}
        onChange={handleSearch}
      />
    </section>
  );
}

function FileList({ files, handleDelete, deletingFileId, deleteProgress }) {
  return (
    <section className="file-list">
      <h2>Files</h2>
      <div className="folder-container">
        {files.map((file, index) => (
          <div className="folder" key={index}>
            <i className="material-icons">insert_drive_file</i>
            <h3>{file.name}</h3>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              View File
            </a>
            <button onClick={() => handleDelete(file)}>Delete</button>
            {deletingFileId === file.id && <p>Deleting file: {deleteProgress}%</p>}
          </div>
        ))}
        {files.length === 0 && <p>No files found.</p>}
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







