'use client';

import { useState } from 'react';
import { blogsCaseStudies } from '@/data/caseStudies';

export default function AllBlogs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags for filtering
  const uniqueTags = Array.from(
    new Set(blogsCaseStudies.map(blog => blog.tag))
  ).sort();

  // Filter blogs based on selected tag
  const filteredBlogs = selectedTag
    ? blogsCaseStudies.filter(blog => blog.tag === selectedTag)
    : blogsCaseStudies;

  return (
    <section className="relative bg-white py-24 md:py-36 z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Header Block */}
        <div className="relative flex flex-col items-start mb-24 md:mb-36">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 h-12 bg-midnight-blue rounded-full flex items-center justify-center animate-bounce">
              <img
                src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e97753eeed62408a_arrow_down.svg"
                alt=""
                className="h-4 w-4 invert"
              />
            </div>
            <p className="label-copy text-sm text-midnight-blue/60 uppercase">
              Explore all our case studies
            </p>
          </div>

          <div className="relative leading-none">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-midnight-blue select-none font-bold uppercase tracking-tighter">
              Our
            </h1>
            
            <div className="absolute top-1/4 left-[35%] w-8 h-8 rounded-full bg-hotred animate-ping" />
            <div className="absolute bottom-1/4 left-[65%] w-5 h-5 rounded-full bg-hotred" />
          </div>

          <div className="mt-2 md:mt-4 ml-8">
            <h2 className="text-2xl md:text-3xl text-midnight-blue italic font-light">
              Case Studies
            </h2>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mb-12 md:mb-16 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedTag === null
                ? 'bg-midnight-blue text-white'
                : 'bg-midnight-blue/10 text-midnight-blue hover:bg-midnight-blue/20'
            }`}
          >
            All
          </button>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedTag === tag
                  ? 'bg-hotred text-white'
                  : 'bg-hotred/10 text-hotred hover:bg-hotred/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-midnight-blue/60 mb-8 text-sm">
          Showing {filteredBlogs.length} of {blogsCaseStudies.length} case studies
        </p>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {filteredBlogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              className="flex flex-col gap-3 cursor-pointer group"
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card thumbnail container */}
              <div
                className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-lg cursor-pointer transition-shadow"
              >
                {/* Static base image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Dark reveal gradient */}
                <div className="absolute inset-0 bg-midnight-blue/10 group-hover:bg-midnight-blue/0 transition-colors duration-300" />

                {/* Tag overlay */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold bg-hotred/90 text-white px-2 py-1 rounded-full tracking-wide">
                    {blog.tag}
                  </span>
                </div>
              </div>

              {/* Title & metadata */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-midnight-blue group-hover:text-hotred transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-midnight-blue/70 text-xs leading-relaxed line-clamp-2">
                  {blog.description}
                </p>

                {/* Results highlight */}
                {blog.results && (
                  <div className="pt-1 border-t border-midnight-blue/10">
                    <ul className="space-y-0.5 text-xs text-midnight-blue/60">
                      {Object.values(blog.results).slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-hotred mt-0.5 flex-shrink-0">•</span>
                          <span className="line-clamp-1">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Read More link */}
                <div className="pt-1 mt-auto">
                  <span className="text-hotred font-semibold text-xs group-hover:gap-2 flex items-center gap-0.5 transition-all duration-300">
                    Learn More
                    <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* No results message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-midnight-blue/60 text-lg">
              No case studies found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
