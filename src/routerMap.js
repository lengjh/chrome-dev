module.exports = async function (defaultPathMap) {
  return {
    "/": { page: "/" },
    "/options": { page: "/options" },
    "/home": { page: "/home" },
    "/popup": { page: "/popup" },
    "/tools": { page: "/tools" }
  };
};
