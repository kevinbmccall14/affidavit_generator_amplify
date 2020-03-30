/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
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
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
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
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
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
        case {
          id
          aaa
          files {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
