import  sanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'qhmrlsoy',
    dataset: 'production',
    apiVersion: '2022-11-05', 
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true, 
  });

  const builder = imageUrlBuilder(client)

  export const urlFor = (source) => builder.image(source);