'use client';

import { createPost } from '../services/post';
import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

export default async function CreateAccountPrompt() {
        
    // Need to created a function in services
    
    const { data, isLoading, isError } = useQuery({
        queryFn: getAllPosts,
        queryKey: ["posts"],
      });
    const {loggedIn} = await mutateAsync();

    if (loggedIn) {
        console.log("LOGGED IN")
    } else {
        console.log("Not Logged In")
    }
    
    return (
        <>
        <p>hi</p>
        </>
    )
}