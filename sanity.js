import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    // projectId: "8pvnom3a",
    projectId: "qwoxusny",
    dataset: "production",
    

})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;