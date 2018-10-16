export function trimAll(str) {
  if (str && str.length) {
    return str.trim().replace(/\s+/g, ' ');
  }
  return str;
}

export default {};
