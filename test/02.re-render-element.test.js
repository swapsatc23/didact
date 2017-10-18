import test from "ava";
import browserEnv from "browser-env";
/** @jsx createElement */
import { render, createElement } from "../src/didact";

// Create document global var
browserEnv(["document"]);

test.beforeEach(t => {
  let root = document.getElementById("root");
  if (!root) {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }
  t.context.root = root;
});

test("render jsx div", t => {
  const root = t.context.root;
  const element = <div>Foo</div>;
  render(element, root);
  t.is(root.innerHTML, "<div>Foo</div>");
  render(element, root);
  t.is(root.innerHTML, "<div>Foo</div>");
});
