export const selectGroup = ({groups}, groupId) => {
  return groups[groupId] || {};
}
