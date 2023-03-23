/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
      id
      theme
      description
      imageALT
      imageSRC
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
      id
      theme
      description
      imageALT
      imageSRC
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
      id
      theme
      description
      imageALT
      imageSRC
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      title
      description
      content
      imageSRC
      imageALT
      theme
      author
      pubDate
      readingTime
      contentTable
      blog {
        id
        theme
        description
        imageALT
        imageSRC
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      title
      description
      content
      imageSRC
      imageALT
      theme
      author
      pubDate
      readingTime
      contentTable
      blog {
        id
        theme
        description
        imageALT
        imageSRC
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      title
      description
      content
      imageSRC
      imageALT
      theme
      author
      pubDate
      readingTime
      contentTable
      blog {
        id
        theme
        description
        imageALT
        imageSRC
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
