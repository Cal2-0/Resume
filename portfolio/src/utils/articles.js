import frontMatter from 'front-matter';

// Vite specific: import all markdown files as raw strings
const articleModules = import.meta.glob('../content/articles/*.md', { query: '?raw', import: 'default', eager: true });

export const getAllArticles = () => {
  const articles = Object.entries(articleModules).map(([path, rawContent]) => {
    // Vite's raw import returns the string content
    const parsed = frontMatter(rawContent);
    const slug = path.split('/').pop().replace('.md', '');
    
    // Ensure category is always an array
    let categories = [];
    if (parsed.attributes.category) {
      if (Array.isArray(parsed.attributes.category)) {
        categories = parsed.attributes.category;
      } else {
        categories = [parsed.attributes.category];
      }
    }
    
    return {
      id: slug,
      slug,
      ...parsed.attributes,
      categories,
      content: parsed.body,
    };
  });

  // Sort by date descending
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getArticleBySlug = (slug) => {
  const articles = getAllArticles();
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  const articles = getAllArticles();
  return articles.filter(article => article.categories.includes(category));
};

export const getArticlesByTag = (tag) => {
  const articles = getAllArticles();
  return articles.filter(article => article.tags && article.tags.includes(tag));
};

// Extractor for homepage category panels
export const getCategoryStats = () => {
  const articles = getAllArticles();
  const stats = {};
  
  articles.forEach(article => {
    article.categories.forEach(cat => {
      if (!stats[cat]) stats[cat] = 0;
      stats[cat]++;
    });
  });
  
  return stats;
};

// Filter by mood/type for the Mood Selector
export const getArticlesByType = (type) => {
  const articles = getAllArticles();
  return articles.filter(article => article.type === type);
};
