import { OpenGraphMedia } from 'next-seo/lib/types';

export interface IConfig {
   site_name: string;
   canonical: string;
   title: string;
   description: string;
   locale: string;
   images: OpenGraphMedia[];
}
