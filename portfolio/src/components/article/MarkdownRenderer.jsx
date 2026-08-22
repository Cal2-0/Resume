import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Override default elements with custom classes if necessary
          p: ({ node, ...props }) => <p {...props} />,
          h2: ({ node, ...props }) => <h2 {...props} />,
          h3: ({ node, ...props }) => <h3 {...props} />,
          blockquote: ({ node, ...props }) => (
            // The prompt uses [!CAUTION] for GitHub alerts, remark-gfm doesn't parse them natively without a specialized plugin,
            // so we do a simple check to apply our callout classes
            <blockquote className={props.children?.toString().includes('[!CAUTION]') ? 'article-callout caution' : ''}>
              {props.children}
            </blockquote>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
