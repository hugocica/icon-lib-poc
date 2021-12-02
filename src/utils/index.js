module.exports = {
  isSVG: (file) => /.svg$/.test(file),
  removeExtension: (file) => file.split(".")[0],
  toPascalCase: (name) =>
    name
      .match(/[a-z0-9]+/gi)
      ?.map(
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .join(""),
};
