'use client';

import { useState } from 'react';
import { Switch, ControlBar } from './PreviewControls';
import { demoBlogPosts } from '@/data/demo';

import BlogGrid from '@/sections/blog/BlogGrid';
import BlogList from '@/sections/blog/BlogList';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function BlogPreview() {
  const [featured, setFeatured] = useState(false);

  return (
    <>
      <ControlBar>
        <Switch label="Featured Post" checked={featured} onChange={setFeatured} />
      </ControlBar>

      <VariantLabel name="BlogGrid" />
      <BlogGrid posts={demoBlogPosts} featured={featured} limit={6} />

      <VariantLabel name="BlogList" />
      <BlogList posts={demoBlogPosts} limit={6} />
    </>
  );
}
