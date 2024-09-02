import React from 'react';
import styled from 'styled-components';

interface Post {
  id: number;
  title: string;
  body: string;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

function BoardList({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h2>Posts</h2>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default BoardList;
