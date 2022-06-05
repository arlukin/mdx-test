import "./App.css";
import { MDXProvider } from "@mdx-js/react";
import Post from "./post.mdx";

const components = {
  h1: (props) => <>The cow</>,
  p: (props) => <>has now changed</>,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MDXProvider components={components}>
          <Post />
        </MDXProvider>
      </header>
    </div>
  );
}

export default App;
