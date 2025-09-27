# 📝 Task Manager Application

A modern, responsive Task Manager built with **React** that helps you stay organized and get things done! This application provides a clean and intuitive interface for managing your daily tasks with persistence across browser sessions.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-green)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

## 🌟 Live Demo

**[🚀 Try the Live Application](https://your-deployed-app-url.netlify.app)** _(Deploy instructions below)_

> **Note**: To deploy your own version, follow the deployment instructions in this README.

## 🚀 Features

### ✅ Core Functionality
- **Add Tasks**: Create new tasks with title and description
- **Toggle Completion**: Mark tasks as complete or incomplete with visual feedback
- **Filter Tasks**: Filter by All, Pending, or Completed tasks
- **Persistent Storage**: All tasks are automatically saved in browser localStorage
- **Delete Tasks**: Remove tasks you no longer need

### 🎁 Bonus Features
- **Real-time Search**: Search tasks by title as you type
- **Task Statistics**: Live counters showing total, pending, and completed tasks
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: CSS3 with Flexbox and Grid
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser LocalStorage API
- **Build Tool**: Create React App

## 🏗️ Component Architecture

The application is built with reusable React components:

```
src/
├── App.js                 # Main component with state management
├── App.css               # Global styles and responsive design
├── components/
│   ├── TaskForm.js       # Add new tasks form
│   ├── TaskForm.css      # TaskForm styles
│   ├── TaskItem.js       # Individual task display
│   ├── TaskItem.css      # TaskItem styles  
│   ├── TaskList.js       # Container for task items
│   ├── TaskList.css      # TaskList styles
│   ├── TaskFilter.js     # Filter controls (All/Pending/Completed)
│   ├── TaskFilter.css    # TaskFilter styles
│   ├── SearchBar.js      # Real-time search functionality
│   └── SearchBar.css     # SearchBar styles
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🌐 Deployment

### Deploy to Netlify (Recommended)

#### Option 1: Drag and Drop
1. Run `npm run build` to create the production build
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `build` folder onto the page
4. Your app will be live instantly!

#### Option 2: Connect to Git (Recommended for updates)
1. Push your code to GitHub (already done!)
2. Go to [https://app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Choose GitHub and select this repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your app will be deployed!

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://your-username.github.io/task-manager-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## 📖 Usage Guide

### Adding Tasks
1. Enter a task title (required)
2. Optionally add a description
3. Click "Add Task" or press Enter

### Managing Tasks
- **Complete**: Click the circle button (○) to mark as complete (✓)
- **Delete**: Click the × button to remove a task
- **Search**: Type in the search bar to find specific tasks
- **Filter**: Use All, Pending, or Completed buttons to filter your view

### Data Persistence
- All tasks are automatically saved to your browser's localStorage
- Your tasks will persist even after closing and reopening the browser
- Data is stored locally and never sent to external servers

## 🎨 Design Features

### Visual Elements
- **Gradient Background**: Beautiful purple-blue gradient
- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Smooth Animations**: Hover effects and transitions throughout
- **Responsive Typography**: Scales appropriately across devices

### Color Scheme
- Primary: `#667eea` (Soft Blue)
- Secondary: `#764ba2` (Purple)
- Success: `#28a745` (Green for completed tasks)
- Danger: `#dc3545` (Red for delete actions)

## 📱 Responsive Breakpoints

- **Desktop**: `> 768px` - Full layout with side-by-side controls
- **Mobile**: `≤ 768px` - Stacked layout optimized for touch

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - One-way operation to expose build configuration

### Code Structure

The application follows React best practices:
- **Functional Components**: All components use modern React hooks
- **State Management**: Centralized state in App.js with prop drilling
- **CSS Modules**: Component-specific CSS files for maintainability
- **Responsive Design**: Mobile-first approach with progressive enhancement

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📦 Repository Stats

![GitHub stars](https://img.shields.io/github/stars/igpravin/task-manager-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/igpravin/task-manager-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/igpravin/task-manager-app)
![GitHub pull requests](https://img.shields.io/github/issues-pr/igpravin/task-manager-app)

## 📞 Contact & Links

- **GitHub Repository**: [https://github.com/igpravin/task-manager-app](https://github.com/igpravin/task-manager-app)
- **Live Demo**: [Deploy your own version!](#-deployment)
- **Report Issues**: [Create an Issue](https://github.com/igpravin/task-manager-app/issues/new/choose)
- **Feature Requests**: [Request a Feature](https://github.com/igpravin/task-manager-app/issues/new?assignees=&labels=enhancement&template=feature_request.md)
- **Contribute**: See [CONTRIBUTING.md](CONTRIBUTING.md)

---

⭐ **Star this repo** if you found it helpful! • 🐛 **Found a bug?** [Report it](https://github.com/igpravin/task-manager-app/issues) • 🚀 **Want to contribute?** [Check our guidelines](CONTRIBUTING.md)

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
