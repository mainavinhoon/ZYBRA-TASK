export const fetchUsers = async (page = 1) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  };