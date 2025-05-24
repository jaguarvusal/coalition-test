export const fetchJessicaTaylor = async () => {
    const username = 'coalition';
    const password = 'skills-test';
    const token = btoa(`${username}:${password}`);
  
    try {
      const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      return data.find(p => p.name === 'Jessica Taylor');
    } catch (error) {
      console.error('Failed to fetch patient data:', error);
      return null;
    }
  };
  