/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
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
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
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
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
