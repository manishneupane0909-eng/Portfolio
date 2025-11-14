import React from 'react';

export default function SEO() {
  const title = 'Manish Neupane – Portfolio';
  const description = 'Physics × Computer Science student building magnetic materials, robots, and data tools.';
  const image = '/profile.jpeg';
  const url = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* Enhanced JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Manish Neupane',
          url,
          jobTitle: 'Physics & CS Student',
          worksFor: {
            '@type': 'EducationalOrganization',
            name: 'South Dakota State University'
          },
          sameAs: [
            'https://github.com/manishneupane0909-eng',
            'https://www.linkedin.com/in/manish-neupane/'
          ],
          knowsAbout: ['Python', 'Robotics', 'Physics', 'Research', 'PyTorch', 'MATLAB']
        })}
      </script>
    </>
  );
}