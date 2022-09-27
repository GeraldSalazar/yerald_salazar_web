export interface Project {
  name: string;
  description: string;
  image: string;
}
export const projectList: Project[] = [
  {
    name: 'Karaoke Web App',
    description: `Karaoke is a web application that allows users to add their favorite songs and display a karaoke player, where the lyrics are shown synchronized with the audio of the song. It also checks the device’s microphone and converts the lyrics sung by the user to text format, to check if the lyrics were correct.`,
    image: 'karaoke-preview.png',
  },
  {
    name: 'MyV e-Commerce',
    description: `MyV e-Commerce is an online jewelry store with thousands of followers on its Facebook page. Their products are handmade and these include bracelets, necklaces and earrings. The store has an extensive catalog and deliveries to the whole country.`,
    image: 'myv-preview.png',
  },
  {
    name: 'StrongerMe Mobile App',
    description: `StrongerMe is a complementary tool for physical improvement. The application provides functions to maintain a detailed training record, in addition to providing built-in routines. It uses a database that contains a big amount of physical exercises from different disciplines and is capable of storing from individual training sessions to complete weekly programs.`,
    image: 'strongerme-preview.png',
  },
];
