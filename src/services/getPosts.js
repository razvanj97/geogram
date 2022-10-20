import { getDocs } from 'firebase/firestore';
import { postsCollectionRef } from '../firebase-config';

const getPosts = async () => {
  const data = await getDocs(postsCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export default getPosts;
