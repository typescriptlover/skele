import { FC } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { OpenGraphMedia } from 'next-seo/lib/types';

import config from '@/lib/config';

interface Props {
   title?: string;
   description?: string;
   canonical?: string;
   noindex?: boolean;
   nofollow?: boolean;
   images?: OpenGraphMedia[];
}

const Meta: FC<Props> = (props) => (
   <>
      <Head>
         <meta charSet="UTF-8" key="charset" />
         <meta
            name="viewport"
            content="width=device-width,initial-scale=1"
            key="viewport"
         />
      </Head>
      <NextSeo
         title={props.title ? config.title + ' - ' + props.title : config.title}
         description={props.description || config.description}
         canonical={props.canonical || config.canonical}
         openGraph={{
            title: props.title
               ? config.title + ' - ' + props.title
               : config.title,
            description: props.description || config.description,
            url: props.canonical || config.canonical,
            locale: config.locale,
            site_name: config.site_name,
            images: props.images || config.images,
         }}
         twitter={{
            site: config.canonical,
            cardType: 'summary_large_image',
         }}
         noindex={props.noindex || false}
         nofollow={props.nofollow || false}
      />
   </>
);

export default Meta;
