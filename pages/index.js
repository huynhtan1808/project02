import  Head from 'next/head';
import { useAuth } from '../lib/auth';
import { Button, Heading, Text } from '@chakra-ui/react';


export default function Home() {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Danh Gia</title>
      </Head>
      <main>
        <Heading>
          REVIU
        </Heading>

        <Text>Huynh Cong Tan</Text>

        <Button onClick={(e) => auth.signinWithEmail()}>Sign in</Button>

        <div>{auth?.user}</div> 
      </main>
      <footer>
      </footer>
    </div>
  );
};
