export function getEndPoint(media) {
    switch (media) {
      case 'Reddit':
        return '/services/reddit/posts';
      case 'YouTube':
        return '/services/youtube/videos';
      // Handle other media types as needed
      default:
        // Handle unsupported media types or show an error message
        break;
    }
}