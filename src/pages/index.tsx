import Head from 'next/head'
import { Seo } from '../ui/components/seo';
import { Typographiy } from '@/ui/design-system/typographiy/typography';
export default function Home() {
  return (
    <>
    <Seo title="mon app" desciption='la descrption de ma page' />
   <div className='space-y-8 '>
    <Typographiy  variant='h4' component='div'>
   open dev
  </Typographiy>

    <Typographiy  variant='h3' component='div' theme='primary'>
   open dev
  </Typographiy>
  <Typographiy theme='secondary'  variant='h2' component='div'>
   open dev
  </Typographiy>
  <Typographiy  variant='h1' component='div'>
   open dev
  </Typographiy>  
  </div>       
   </>
  )
}
