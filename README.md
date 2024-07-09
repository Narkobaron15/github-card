# React GitHub Repository Viewer  

## Description  

The React GitHub Repository Viewer is a modern web application that allows users to explore and interact with GitHub repositories effortlessly. By leveraging the GitHub API, this app provides a user-friendly interface to search for repositories, view detailed information, and explore user profiles.  

## Features  

- **Repository Search**: Search for repositories by name, description, or topics.  
- **Repository Details**: View comprehensive information about repositories, including:  
  - Star count  
  - Fork count  
  - Open issues  
  - Last update date  
  - Primary language  
- **User Profiles**: Explore GitHub user profiles and their public repositories.  
- **Pagination**: Navigate through search results with ease.  
- **Responsive Design**: Enjoy a seamless experience across desktop and mobile devices.  
- **Authentication**: Sign in with GitHub to access private repositories and increase API rate limits.  

## Technologies Used  

- React  
- GitHub REST API  
- Axios for API requests  
- React Router for navigation  

## Installation  

1. Clone the repository:  
   ```
   git clone https://github.com/Narkobaron15/github-card.git
   ```
2. Navigate to the project directory:  
   ```
   cd github-card
   ```
3. Install dependencies:  
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your GitHub API credentials:  
   ```
   REACT_APP_GITHUB_CLIENT_ID=your_client_id_here
   REACT_APP_GITHUB_CLIENT_SECRET=your_client_secret_here
   ```
5. Start the development server:  
   ```
   npm run dev
   ```

## Usage  

1. On the home page, enter a search term in the search bar to find repositories.  
2. Click on a repository to view its detailed information.  
3. Navigate to user profiles by clicking on usernames or avatars.  
4. Use the pagination controls to browse through search results.  
5. Sign in with your GitHub account to access additional features and increase API rate limits.  

## Acknowledgments  

- GitHub for providing the API  
- React community for the excellent documentation and resources  
