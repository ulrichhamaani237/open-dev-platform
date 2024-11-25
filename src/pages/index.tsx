import Head from "next/head";
import { Seo } from "../ui/components/seo";
import { Typographiy } from "@/ui/design-system/typographiy/typography";
import { Button } from "@/ui/design-system/buttons/button";
export default function Home() {
  return (
    <>
      <Seo title="mon app" desciption="la descrption de ma page" />
    <div className="flex flex-col items-center content-start gap-4">
      <Button variant='secondary'>My button</Button><br />
      <Button variant='outline' size='small'>My button</Button><br />
      <Button size='medium' variant='desabled'>My button</Button><br />
      <Button size='large' >My button</Button><br />
      </div> 
      
    </>
  );
}
