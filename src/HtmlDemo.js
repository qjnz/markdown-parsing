import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import TestHtml from "./data/test.htm";

export const HtmlDemo = () => {
  const [content, setContent] = useState();

  const fetchContent = async () => {
    const response = await fetch(TestHtml);
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
