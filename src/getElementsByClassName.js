const getElementsByClassName = (className) => {
  // YOUR CODE HERE
  const result = [];
  function traverse(element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.childNodes.length > 0) {
      for (const node of element.childNodes) {
        traverse(node);
      }
    }
  }
  traverse(document.body);
  return result;
};

module.exports = { getElementsByClassName };
