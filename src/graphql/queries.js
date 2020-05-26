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
          key
          bucket
          size
          analysis
          createdAt
          updatedAt
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
      key
      bucket
      size
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
      createdAt
      updatedAt
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
        key
        bucket
        size
        analysis
        case {
          id
          aaa
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
