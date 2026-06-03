function getJsBasicsKeywordMeaning(term) {
  const meanings = {
    let: "block scoped variable declaration",
    const: "constant variable declaration",
    var: "function scoped variable declaration",
    null: "intentional absence of value",
    undefined: "value not assigned",
    typeof: "returns the data type",
    function: "declares a function",
    return: "returns a value from a function"
  };

  const normalizedTerm = term.trim().toLowerCase();

  return meanings[normalizedTerm] || "unknown";
}