import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
// Selected Theme
import vsDark from "prism-react-renderer/themes/vsDark";

export default function Code({ children }) {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language='javascript'
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "1em 1em 0.5em",
            fontSize: "1rem",
            backgroundColor: "#1b1b1b",
            fontFamily: "monospace",
            letterSpacing: "0.0125em",
            margin: "1rem",
            maxWidth: "80%",
            borderRadius: "10px",
            lineBreak: "auto",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
