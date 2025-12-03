import React from 'react';

export default function SEO() {
  const title = 'Manish Neupane – Physics × Code Portfolio';
  const description = 'Physics & CS student at SDSU (Class of 2026) building magnetic materials research tools, robotics systems, and ML applications. Open to R&D/SWE roles.';
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
      {/* Enhanced JSON-LD for better Google indexing */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Manish Neupane',
          url,
          jobTitle: 'Physics & Computer Science Student | Aspiring R&D/SWE Engineer',
          description: 'Building magnetic materials research tools, robotics systems, and ML applications.',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'South Dakota State University',
            sameAs: 'https://www.sdstate.edu/'
          },
          sameAs: [
            'https://github.com/manishneupane0909-eng',
            'https://www.linkedin.com/in/manish-neupane/'
          ],
          knowsAbout: ['Python', 'PyTorch', 'Machine Learning', 'Robotics', 'Physics', 'MATLAB', 'Data Automation', 'Materials Science', 'CUDA'],
          seeks: 'R&D, Robotics, or Software Engineering roles (graduating Spring 2026)'
        })}
      </script>
    </>
  );
}