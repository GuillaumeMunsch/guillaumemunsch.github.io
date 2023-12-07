import React, { useEffect, useState } from "react";

const HTMLRenderer = ({ htmlPath }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlPath);
        console.log("response", response);
        const data = await response.text();
        console.log("data", data);
        setHtmlContent(data);
        document.write(data);
      } catch (error) {
        console.error("Error fetching HTML content:", error);
      }
    };

    fetchHtmlContent();
  }, [htmlPath]);

  return null;
};

export default HTMLRenderer;
