export const selectGroup = ({groups}, groupId) => {
  return groups[groupId] || {};
}

export const selectEventsForGroup = ({groups, events}, group) => {
  return group.events.map(eventId => events[eventId]);
}

export const hasJoinGroup = (groupId, userId, joinGroups) => {
  let joined = Object.values(joinGroups);
  for (let i = 0; i < joined.length; i++) {
    if (joined[i].userId === userId && joined[i].groupId === groupId) {
      return true;
    }
  }
  return false;
}
