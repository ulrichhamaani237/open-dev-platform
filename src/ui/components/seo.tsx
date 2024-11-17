
import Head from "next/head";

interface Props {
 title: string;
 desciption?: string; //
}

export const Seo = ({title, desciption}:Props) => {
   
    return (
        <>
         <Head>
        <title>{title}</title>
        <meta name="description..." content={desciption} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        </>
    );
}