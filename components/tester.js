'use client';

import { useSession } from 'next-auth/react';

export default function Tester() {
    const { data: session } = useSession();
    console.log("THE TOCKENN:", session?.user.accessToken)
  return <></>
}
