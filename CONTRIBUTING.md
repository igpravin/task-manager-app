# Contributing to Task Manager App

Thank you for your interest in contributing to the Task Manager App! We welcome contributions from everyone.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then:
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style
- Use functional components with React hooks
- Follow existing naming conventions
- Write clean, readable code with comments where necessary
- Maintain consistent indentation (2 spaces)

### Component Structure
```
src/components/
├── ComponentName.js    # Component logic
└── ComponentName.css   # Component styles
```

### CSS Guidelines
- Use CSS modules or component-specific CSS files
- Follow BEM naming convention when applicable
- Ensure responsive design (mobile-first approach)
- Use CSS variables for consistent theming

## 🧪 Testing

Before submitting a pull request:

1. **Test your changes**
   ```bash
   npm test
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Test the production build**
   ```bash
   npm install -g serve
   serve -s build
   ```

## 📬 Submitting Changes

### Pull Request Process

1. **Update documentation** if you've made changes to functionality
2. **Add or update tests** for your changes
3. **Ensure all tests pass**
4. **Create detailed pull request description**

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to demonstrate changes

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] New and existing tests pass
```

## 🐛 Reporting Bugs

Use the **Bug Report** issue template and include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, device)
- Screenshots if applicable

## 💡 Suggesting Features

Use the **Feature Request** issue template and include:
- Clear description of the feature
- Problem it solves
- Proposed solution
- Use cases
- Mockups or examples if available

## 🎯 Development Priorities

### High Priority
- Accessibility improvements
- Performance optimizations
- Mobile responsiveness enhancements
- Cross-browser compatibility

### Medium Priority
- New task management features
- UI/UX improvements
- Code refactoring
- Test coverage improvements

### Low Priority
- Visual enhancements
- Code comments and documentation
- Development tooling improvements

## 📋 Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Create production build
- `npm run eject` - Eject from Create React App (use with caution)

## 🤝 Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the code of conduct

## 📞 Getting Help

- **Issues**: Create a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Email**: Contact the maintainer for urgent matters

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special mentions in project updates

Thank you for contributing! 🎉