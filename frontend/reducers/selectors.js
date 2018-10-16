export const selectGroup = ({groups}, groupId) => {
  return groups[groupId] || {};
}

export const selectEventsForGroup = ({groups, events}, group) => {
  return group.events.map(eventId => events[eventId]);
}
