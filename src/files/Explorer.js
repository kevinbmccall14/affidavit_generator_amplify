import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFiles } from '../graphql/queries';
import { onCreateFile } from '../graphql/subscriptions';

// const getFiles = `query ListFiles(
//   $filter: ModelFileFilterInput
//   $limit: Int
//   $nextToken: String
// ) {
//   listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
//     items {
//       id
//       url
//       pages {
//         lines {
//           text
//           confidence
//         }
//         fields {
//           key
//           value
//         }
//       }
//       case {
//         id
//         aaa
//         files {
//           nextToken
//         }
//       }
//     }
//     nextToken
//   }
// }`;

const Explorer = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      const data = await API.graphql(graphqlOperation(listFiles));
      setFiles(data.data.listFiles.items);
    }
    fetchFiles();

    const subscription = API.graphql(
      graphqlOperation(onCreateFile),
    ).subscribe({
      next: eventData => {
        console.log(eventData);
        const file = eventData.value.data.onCreateFile.file;
        setFiles([...files, file]);
      },
    });
  }, []);

  return (
    <section>
      {files.map(file => (
        <p>{file.url}</p>
      ))}
    </section>
  );
};

export default Explorer;
