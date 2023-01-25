import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import TestMarkdown from "./data/test.md";

export const MarkdownDemo = () => {
  const [content, setContent] = useState();

  const fetchContent = async () => {
    const response = await fetch(TestMarkdown);
    const data = await response.text();
    setContent(data);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="App">
      <Link to="/">Back</Link>
      {content ? (
        <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
      ) : undefined}
    </div>
  );
};
