/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
      id
      title
      description
      theme
      imageSRC
      imageALT
      posts {
        items {
          id
          title
          description
          theme
          author
          dateCreated
          dateUpdatet
          readingTime
          imageSRC
          imageALT
          contentTable
          content
          relatedPosts
          createdAt
          updatedAt
          blogPostsId
        }
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
      title
      description
      theme
      imageSRC
      imageALT
      posts {
        items {
          id
          title
          description
          theme
          author
          dateCreated
          dateUpdatet
          readingTime
          imageSRC
          imageALT
          contentTable
          content
          relatedPosts
          createdAt
          updatedAt
          blogPostsId
        }
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
      title
      description
      theme
      imageSRC
      imageALT
      posts {
        items {
          id
          title
          description
          theme
          author
          dateCreated
          dateUpdatet
          readingTime
          imageSRC
          imageALT
          contentTable
          content
          relatedPosts
          createdAt
          updatedAt
          blogPostsId
        }
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
      theme
      author
      dateCreated
      dateUpdatet
      readingTime
      imageSRC
      imageALT
      contentTable
      content
      blog {
        id
        title
        description
        theme
        imageSRC
        imageALT
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      relatedPosts
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
      theme
      author
      dateCreated
      dateUpdatet
      readingTime
      imageSRC
      imageALT
      contentTable
      content
      blog {
        id
        title
        description
        theme
        imageSRC
        imageALT
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      relatedPosts
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
      theme
      author
      dateCreated
      dateUpdatet
      readingTime
      imageSRC
      imageALT
      contentTable
      content
      blog {
        id
        title
        description
        theme
        imageSRC
        imageALT
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      relatedPosts
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
