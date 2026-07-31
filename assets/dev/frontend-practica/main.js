import './style.css'

document.querySelector('#fetch-btn').addEventListener('click', async () => {
  const container = document.querySelector('#data-container');
  const btn = document.querySelector('#fetch-btn');
  
  // Set loading state
  btn.textContent = 'Fetching...';
  btn.disabled = true;
  container.innerHTML = '<p class="placeholder-text">Loading secure data...</p>';
  
  try {
    // Simulate a network request to an API (like the rest-api the students have)
    // Normally this would be: await fetch('http://localhost:3000/api/data')
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock data based on typical security lab output
    const mockData = [
      { id: 1, action: 'User Login', status: 'Success', time: '10:42 AM' },
      { id: 2, action: 'Database Query', status: 'Success', time: '10:45 AM' },
      { id: 3, action: 'Security Scan', status: 'Warning', time: '10:50 AM' },
    ];
    
    container.innerHTML = ''; // Clear placeholder
    
    mockData.forEach(item => {
      const el = document.createElement('div');
      el.className = 'data-item';
      
      const statusColor = item.status === 'Warning' ? '#fbbf24' : '#10b981';
      
      el.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong style="color: #e2e8f0;">${item.action}</strong>
          <span style="color: #94a3b8; font-size: 0.85rem;">${item.time}</span>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.9rem; color: ${statusColor};">
          Status: ${item.status}
        </div>
      `;
      container.appendChild(el);
    });
    
  } catch (error) {
    container.innerHTML = '<p class="placeholder-text" style="color: #ef4444;">Error fetching data. Check your API connection.</p>';
  } finally {
    // Reset button
    btn.textContent = 'Fetch Data';
    btn.disabled = false;
  }
});
