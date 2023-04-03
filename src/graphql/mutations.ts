/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
