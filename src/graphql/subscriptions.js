/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase {
    onCreateCase {
      id
      aaa
      files {
        items {
          id
          analysis
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase {
    onUpdateCase {
      id
      aaa
      files {
        items {
          id
          analysis
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase {
    onDeleteCase {
      id
      aaa
      files {
        items {
          id
          analysis
        }
        nextToken
      }
    }
  }
`;
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
      id
      pages {
        lines {
          text
          confidence
        }
        fields {
          key
          value
        }
      }
      analysis
      case {
        id
        aaa
        files {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
      id
      pages {
        lines {
          text
          confidence
        }
        fields {
          key
          value
        }
      }
      analysis
      case {
        id
        aaa
        files {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
      id
      pages {
        lines {
          text
          confidence
        }
        fields {
          key
          value
        }
      }
      analysis
      case {
        id
        aaa
        files {
          nextToken
        }
      }
    }
  }
`;
