const apiKey = 'AIzaSyDc2mF1bvycd4_rL-vRB3NXfA4W_jKgWwU';
// Function to fetch the latest video from YouTube API
async function fetchLatestVideo() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCdGAezwvTu0T2w83E2RopxA&part=snippet,id&order=date&maxResults=1`
      );
  
      const data = await response.json();
  
      if (data.items.length > 0) {
        const videoTitle = data.items[0].snippet.title;
        const videoDescription = data.items[0].snippet.description;
        const videoId = data.items[0].id.videoId;
  
        // Display the latest video information
        document.getElementById('video-title').textContent = videoTitle;
        document.getElementById('video-description').textContent = videoDescription;
  
        // Embed the latest video
        const videoEmbed = document.getElementById('video-embed');
        videoEmbed.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      }
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
    }
  }
  
  // Call the function to fetch and display the latest video
  fetchLatestVideo();