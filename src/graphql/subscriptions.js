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
          url
          case {
            id
            aaa
          }
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
          url
          case {
            id
            aaa
          }
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
          url
          case {
            id
            aaa
          }
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
      url
      pages {
        lines {
          text
          confidence
          words {
            text
            confidence
          }
        }
        tables {
          cells {
            row
            column
            text
            confidence
          }
        }
        fields {
          key
          value
        }
      }
      case {
        id
        aaa
        files {
          items {
            id
            url
          }
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
      url
      pages {
        lines {
          text
          confidence
          words {
            text
            confidence
          }
        }
        tables {
          cells {
            row
            column
            text
            confidence
          }
        }
        fields {
          key
          value
        }
      }
      case {
        id
        aaa
        files {
          items {
            id
            url
          }
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
      url
      pages {
        lines {
          text
          confidence
          words {
            text
            confidence
          }
        }
        tables {
          cells {
            row
            column
            text
            confidence
          }
        }
        fields {
          key
          value
        }
      }
      case {
        id
        aaa
        files {
          items {
            id
            url
          }
          nextToken
        }
      }
    }
  }
`;
