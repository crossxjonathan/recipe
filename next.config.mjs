/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'thumb.viva.id',
        'google.com',
        'img-global.cpcdn.com',
        'cdn1-production-images-kly.akamaized.net',
        'asset.kompas.com',
        'static.promediateknologi.id',
        'img.kurio.network'
      ],
    },
    env: {
        NEXT_PUBLIC_RECIPE: 'https://pijar-mama-recipe.vercel.app/v1',
      }    
};

export default nextConfig;
