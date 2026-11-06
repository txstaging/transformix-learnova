import type { Metadata } from 'next';
import OriginalSite from '@/components/original-site';
export const metadata:Metadata={title:"المساعد الذكي"};
export default function Page(){return <OriginalSite view="assistant" />;}
