export interface Project {
  name: string;
  description: string;
  previewImage: string;
  allImages: string[];
  allVideos: string[];
  details: string[];
}
export const projectList: Project[] = [
  {
    name: 'Karaoke Web App',
    description: `Karaoke is a web application that allows users to add their favorite songs and display a karaoke player, where the lyrics are shown synchronized with the audio of the song. It also checks the device’s microphone and converts the lyrics sung by the user to text format, to check if the lyrics were correct.`,
    previewImage: 'karaoke-preview.png',
    allImages: [
      'assets/portfolio/images/karaoke01.png',
      'assets/portfolio/images/karaoke02.png',
    ],
    allVideos: ['assets/portfolio/videos/karaoke01.mkv'],
    details: [],
  },
  {
    name: 'MyV e-Commerce',
    description: `MyV e-Commerce is an online jewelry store with thousands of followers on its Facebook page. Their products are handmade and these include bracelets, necklaces and earrings. The store has an extensive catalog and deliveries to the whole country.`,
    previewImage: 'myv-preview.png',
    allImages: [
      'assets/portfolio/images/myv01.png',
      'assets/portfolio/images/myv02.png',
      'assets/portfolio/images/myv03.png',
      'assets/portfolio/images/myv04.png',
      'assets/portfolio/images/myv05.png',
    ],
    allVideos: ['assets/portfolio/videos/myv01.mp4'],
    details: [],
  },
  {
    name: 'StrongerMe Mobile App',
    description: `StrongerMe is a complementary tool for physical improvement. The application provides functions to maintain a detailed training record, in addition to providing built-in routines. It uses a database that contains a big amount of physical exercises from different disciplines and is capable of storing from individual training sessions to complete weekly programs.`,
    previewImage: 'strongerme-preview.png',
    allImages: [
      'assets/portfolio/images/strongerme01.png',
      'assets/portfolio/images/strongerme02.png',
      'assets/portfolio/images/strongerme03.png',
      'assets/portfolio/images/strongerme04.png',
      'assets/portfolio/images/strongerme05.png',
      'assets/portfolio/images/strongerme06.png',
      'assets/portfolio/images/strongerme07.png',
      'assets/portfolio/images/strongerme08.png',
    ],
    allVideos: [],
    details: [],
  },
];
