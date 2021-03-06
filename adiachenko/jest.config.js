module.exports = {
  moduleDirectories: ["node_modules", 'src'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};
