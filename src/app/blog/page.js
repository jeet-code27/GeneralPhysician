import AboutUsHero from "@/components/AboutUsHero";
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Health Blog by Ajmer\'s Best Doctors | Dr. Manish Sharma & Dr. Gauri Mehra',
  description: 'Expert health articles and wellness tips from Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) - Ajmer\'s leading healthcare specialists.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/blog'
  },
  keywords: [
    'health blog ajmer',
    'medical articles by doctors',
    'wellness tips physician',
    'nutrition advice dietician',
    'Dr. Manish Sharma blog',
    'Dr. Gauri Mehra articles',
    'healthcare tips ajmer',
    'chronic disease management blog',
    'weight loss advice doctors',
    'diabetes care articles',
    'healthy lifestyle tips',
    'preventive healthcare blog',
    'doctor written health content'
  ],
  openGraph: {
    title: 'Health Blog by Ajmer\'s Best Doctors | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Trusted medical advice and wellness tips from Ajmer\'s leading healthcare specialists',
    url: 'https://gaurnishhealth.in/blog',
    siteName: 'GaurNish Health Blog',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog by Ajmer\'s Best Doctors | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Expert medical articles and wellness guidance from Ajmer\'s specialists',
    images: ['/images/blog-og-image.jpg'],
  },
};

function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export default function Blog() {
  const blogs = getBlogs();
  
  return (
    <>
      <AboutUsHero
        title="Health & Wellness Blog"
        description="Stay informed with expert tips from Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) on managing health, nutrition, lifestyle diseases, and wellness care."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
        ]}
      />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="relative aspect-square w-full" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                  <Image 
                    src={blog.image || '/images/placeholder.jpg'} 
                    alt={blog.alt || blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={blog.id <= 2}
                  />
                  <meta itemProp="url" content={blog.image} />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <time 
                      dateTime={new Date(blog.date).toISOString()} 
                      itemProp="datePublished"
                      className="text-sm text-gray-500"
                    >
                      {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                    <span className="mx-2 text-gray-400">•</span>
                    <span itemProp="author" className="text-sm text-green-600">
                      {blog.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-700" itemProp="headline">
                    <Link href={`/blog/${blog.slug}`} itemProp="url">
                      {blog.heading}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4" itemProp="description">
                    {blog.excerpt || blog.content.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags && blog.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block bg-[#016630] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                    aria-label={`Read more about ${blog.title}`}
                    itemProp="url"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}