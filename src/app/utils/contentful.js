import { createClient } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.error('Contentful credentials are missing. Please check your .env.local file.');
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export async function fetchAuthors() {
  try {
    const entries = await client.getEntries({
      content_type: 'author',
    });
    console.log('Contentful entries:', entries);

    return entries.items.map(item => ({
      id: item.sys.id,
      authorName: item.fields.authorName,
      slug: item.fields.slug,
      siteImage: item.fields.siteImage?.fields?.file?.url,
      siteUrl: item.fields.siteUrl,
      genre: item.fields.genre,
      bio: item.fields.bio,
    }));
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return [];
  }
}
