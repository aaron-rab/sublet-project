// 'use client';

// import { createPost } from '../frontend-services/post';
// import { useMutation } from '@tanstack/react-query';
// import { useQuery } from '@tanstack/react-query';

// export default async function CreateAccountPrompt() {
        
//     // Need to created a function in services
    
//     const { data, isLoading, isError } = useQuery({
//         queryFn: getAllPosts,
//         queryKey: ["posts"],
//       });

//     if (data?.loggedIn) {
//         console.log("LOGGED IN")
//     } else {
//         console.log("Not Logged In")
//     }
    
//     return (
//         <>
//         <p>hi</p>
//         </>
//     )
// }