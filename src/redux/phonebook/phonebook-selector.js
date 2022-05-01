export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
