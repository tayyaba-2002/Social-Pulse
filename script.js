// API Key
const API_KEY = 'AIzaSyCCKU0F20Q3AVfTM4DLcjdMf2OjaP8PTes';

// RPM rates by country
const RPM_RATES = {
    'US': 7.53,    // United States
    'GB': 5.62,    // United Kingdom
    'NZ': 5.56,    // New Zealand
    'AE': 2.33,    // United Arab Emirates
    'PK': 2.5,     // Pakistan
    'IN': 2.5      // India
};

// Chart instances
let subscriberChart, videoChart, viewsChart, revenueChart, engagementChart, demographicsChart;

// DOM Elements
const searchBtn = document.getElementById('search-btn');
const channelSearch = document.getElementById('channel-search');
const analyticsSection = document.getElementById('analytics-section');

// Initialize charts
function initializeCharts() {
    // Subscriber Growth Chart (Line)
    const subscriberCtx = document.getElementById('subscriberChart').getContext('2d');
    subscriberChart = new Chart(subscriberCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Subscribers',
                data: [12000, 19000, 15000, 22000, 18000, 25000, 30000, 28000, 32000, 35000, 40000, 45000],
                borderColor: '#00ffcc',
                backgroundColor: 'rgba(0, 255, 204, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Subscriber Growth',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Video Uploads Chart (Bar)
    const videoCtx = document.getElementById('videoChart').getContext('2d');
    videoChart = new Chart(videoCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Videos',
                data: [4, 6, 5, 8, 7, 9, 10, 8, 7, 6, 5, 4],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Video Uploads',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Views Over Time Chart (Pie)
    const viewsCtx = document.getElementById('viewsChart').getContext('2d');
    viewsChart = new Chart(viewsCtx, {
        type: 'pie',
        data: {
            labels: ['0-1 min', '1-5 min', '5-10 min', '10-20 min', '20+ min'],
            datasets: [{
                data: [15, 30, 25, 20, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'View Duration',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // Revenue Trends Chart (Doughnut)
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    revenueChart = new Chart(revenueCtx, {
        type: 'doughnut',
        data: {
            labels: ['Ad Revenue', 'Sponsorships', 'Merchandise', 'Memberships', 'Other'],
            datasets: [{
                data: [65, 15, 10, 5, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue Sources',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // Engagement Metrics Chart (Radar)
    const engagementCtx = document.getElementById('engagementChart').getContext('2d');
    engagementChart = new Chart(engagementCtx, {
        type: 'radar',
        data: {
            labels: ['Likes', 'Comments', 'Shares', 'Watch Time', 'Click-through'],
            datasets: [{
                label: 'Engagement',
                data: [80, 60, 70, 90, 50],
                backgroundColor: 'rgba(0, 255, 204, 0.2)',
                borderColor: 'rgba(0, 255, 204, 1)',
                pointBackgroundColor: 'rgba(0, 255, 204, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 255, 204, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Engagement Metrics',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });

    // Audience Demographics Chart (Polar Area)
    const demographicsCtx = document.getElementById('demographicsChart').getContext('2d');
    demographicsChart = new Chart(demographicsCtx, {
        type: 'polarArea',
        data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
            datasets: [{
                label: 'Age Distribution',
                data: [35, 40, 15, 7, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Audience Age',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Calculate estimated revenue
function calculateRevenue(views, country) {
    const rpm = RPM_RATES[country] || 2.0; // Default RPM if country not in list
    const revenue = (views / 1000) * rpm;
    return revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

// Format numbers with commas
function formatNumber(num) {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'N/A';
}

// Format date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Extract channel ID from URL
function extractChannelId(url) {
    if (!url) return null;
    
    // Handle channel URL formats
    if (url.includes('youtube.com/channel/')) {
        return url.split('youtube.com/channel/')[1].split('/')[0].split('?')[0];
    } else if (url.includes('youtube.com/c/') || url.includes('youtube.com/user/')) {
        // For custom URLs, we'll need to search for the channel ID
        return null;
    }
    
    return null;
}

// Search for channel by name
async function searchChannelByName(name) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(name)}&type=channel&maxResults=1&key=${API_KEY}`);
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            return data.items[0].snippet.channelId;
        }
        return null;
    } catch (error) {
        console.error('Error searching for channel:', error);
        return null;
    }
}

// Get channel details
async function getChannelDetails(channelId) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,status,brandingSettings,contentDetails&id=${channelId}&key=${API_KEY}`);
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            return data.items[0];
        }
        return null;
    } catch (error) {
        console.error('Error fetching channel details:', error);
        return null;
    }
}

// Update UI with channel data
function updateUI(channelData) {
    if (!channelData) {
        alert('Channel not found or data unavailable');
        return;
    }

    const snippet = channelData.snippet || {};
    const stats = channelData.statistics || {};
    const status = channelData.status || {};
    const branding = channelData.brandingSettings || {};
    const contentDetails = channelData.contentDetails || {};

    // Channel header
    document.getElementById('channel-title').textContent = snippet.title || 'N/A';
    document.getElementById('channel-handle').textContent = snippet.customUrl ? `@${snippet.customUrl}` : 'N/A';
    document.getElementById('channel-thumbnail').src = snippet.thumbnails?.high?.url || '';
    document.getElementById('channel-thumbnail').alt = `${snippet.title} thumbnail`;
    
    // Channel stats
    document.getElementById('subscriber-count').textContent = formatNumber(stats.subscriberCount);
    document.getElementById('video-count').textContent = formatNumber(stats.videoCount);
    document.getElementById('view-count').textContent = formatNumber(stats.viewCount);
    
    // Channel details
    document.getElementById('channel-id').textContent = channelData.id || 'N/A';
    document.getElementById('channel-description').textContent = snippet.description || 'N/A';
    document.getElementById('channel-created').textContent = formatDate(snippet.publishedAt);
    document.getElementById('channel-status').textContent = `${status.privacyStatus || 'N/A'}${status.isLinked ? ' (Linked)' : ''}`;
    
    // Country
    const country = snippet.country || 'N/A';
    document.getElementById('channel-country').textContent = country;
    
    // Related playlists
    const playlistsContainer = document.getElementById('related-playlists');
    playlistsContainer.innerHTML = '';
    
    if (contentDetails.relatedPlaylists) {
        for (const [key, value] of Object.entries(contentDetails.relatedPlaylists)) {
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            playlistsContainer.appendChild(li);
        }
    } else {
        const li = document.createElement('li');
        li.textContent = 'N/A';
        playlistsContainer.appendChild(li);
    }
    
    // Keywords
    const keywordsContainer = document.getElementById('channel-keywords');
    keywordsContainer.innerHTML = '';
    
    if (branding.channel?.keywords) {
        const keywords = branding.channel.keywords.split(' ').filter(k => k.trim() !== '');
        keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.textContent = keyword;
            keywordsContainer.appendChild(span);
        });
    } else {
        const span = document.createElement('span');
        span.textContent = 'N/A';
        keywordsContainer.appendChild(span);
    }
    
    // Calculate and display revenue
    const views = parseInt(stats.viewCount) || 0;
    const revenue = calculateRevenue(views, snippet.country);
    document.getElementById('total-revenue').textContent = revenue;
    document.getElementById('revenue-country').textContent = `Country: ${country}`;
    
    // Show analytics section
    analyticsSection.style.display = 'block';
    
    // Update charts with some random variations based on channel data
    updateCharts(channelData);
}

// Update charts with channel data
function updateCharts(channelData) {
    const stats = channelData.statistics || {};
    const subscriberCount = parseInt(stats.subscriberCount) || 10000;
    const videoCount = parseInt(stats.videoCount) || 50;
    const viewCount = parseInt(stats.viewCount) || 100000;
    
    // Subscriber Growth Chart
    const subscriberData = subscriberChart.data.datasets[0].data;
    const baseSubscribers = subscriberCount / 2;
    subscriberChart.data.datasets[0].data = subscriberData.map((_, i) => 
        Math.floor(baseSubscribers + (i * (subscriberCount / 12)) * (0.8 + Math.random() * 0.4))
    );
    subscriberChart.update();
    
    // Video Uploads Chart
    const videoData = videoChart.data.datasets[0].data;
    const avgVideos = videoCount / 12;
    videoChart.data.datasets[0].data = videoData.map(() => 
        Math.floor(avgVideos * (0.7 + Math.random() * 0.6))
    );
    videoChart.update();
    
    // Views Over Time Chart
    const viewsData = viewsChart.data.datasets[0].data;
    viewsChart.data.datasets[0].data = viewsData.map(value => 
        Math.floor(value * (viewCount / 100000) * (0.8 + Math.random() * 0.4))
    );
    viewsChart.update();
    
    // Revenue Trends Chart - keep percentages but scale to view count
    const revenueData = revenueChart.data.datasets[0].data;
    const totalRevenue = (viewCount / 1000) * 2.5; // Using default RPM
    revenueChart.data.datasets[0].data = revenueData.map((percent, i) => 
        Math.floor((percent / 100) * totalRevenue)
    );
    revenueChart.update();
    
    // Engagement and Demographics charts remain similar as they're not directly tied to stats
}

// Event listener for search button
searchBtn.addEventListener('click', async () => {
    const query = channelSearch.value.trim();
    if (!query) {
        alert('Please enter a channel name or URL');
        return;
    }
    
    // Show loading state
    searchBtn.disabled = true;
    searchBtn.textContent = 'Searching...';
    
    try {
        // First try to extract channel ID from URL
        let channelId = extractChannelId(query);
        
        // If not a URL or ID not found, search by name
        if (!channelId) {
            channelId = await searchChannelByName(query);
        }
        
        if (!channelId) {
            alert('Channel not found. Please try a different search.');
            return;
        }
        
        // Get channel details
        const channelData = await getChannelDetails(channelId);
        updateUI(channelData);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    } finally {
        // Reset button state
        searchBtn.disabled = false;
        searchBtn.textContent = 'See Analytics';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    analyticsSection.style.display = 'none';
    
    // Allow search on Enter key
    channelSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});