import React, { useState, useEffect, useRef } from 'react';
import BoardList from '../../components/List/BoardList';
import { fetchPosts } from '../../services/boardApi';
import { Link } from 'react-router-dom';
import '../../assets/css/BoardPage.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const BoardPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const getPosts = async () => {
        try {
          const data = await fetchPosts();
          setPosts(data);
        } catch (error) {
          setError('Failed to fetch posts');
        } finally {
          setLoading(false);
        }
      };
      getPosts();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Link to="/" className="back-button">
        Back to Main
      </Link>
      <h1>Board</h1>
      <BoardList posts={posts} />
    </div>
  );
};

export default BoardPage;
