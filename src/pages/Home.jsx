import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-auto text-center min-h-[calc(100vh-160px)]">
                <Container>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to see Posts
                            </h1>
                        </div>
                        {/* Add the image below the text */}
                        <img 
                            src="https://i.postimg.cc/50GchdzX/imghome.jpg" 
                            alt="Background illustration" 
                            className="mt-2 w-auto max-h-[61vh] object-cover rounded-md shadow-2xl mb-2" 
                        />
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
