import React from 'react';
import Dropzone from 'react-dropzone';

// uses XHR request to send file to presignedURL
const uploadToS3 = (url, file) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', url, true);
  xhr.setRequestHeader('Content-Type', file.type);
  xhr.setRequestHeader('x-amz-acl', 'public-read');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status <= 299) {
        console.log(`file successfully uploaded: ${file.name}`);
      } else {
        throw new Error(`unable to upload file: ${file.name}`);
      }
    }
  };
  xhr.send(file);
};

// makes HTTP request to presignS3 Lambda to get presignedURL
const putToSignedURL = file =>
  fetch(
    'https://hudjh9g689.execute-api.us-east-1.amazonaws.com/presignS3',
    {
      method: 'POST',
      body: JSON.stringify({
        bucket: 'backend-dev-uploadbucket-1iz1d3q6w956z',
        path: file.path,
        contentType: 'multipart/form-data',
      }),
    },
  )
    .then(res => res.json())
    .then(({ url }) => uploadToS3(url, file))
    .catch(err => console.log(err));

// File upload component powered by https://www.dropzonejs.com/
const Upload = () => (
  <Dropzone
    onDrop={acceptedFiles =>
      Promise.all(acceptedFiles.map(file => putToSignedURL(file)))
    }
  >
    {({ getRootProps, getInputProps }) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop files here, or click to select</p>
        </div>
      </section>
    )}
  </Dropzone>
);

export default Upload;
