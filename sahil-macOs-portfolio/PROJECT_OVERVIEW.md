# macOS Portfolio - Project Overview

## 🎯 Project Description

A modern, interactive portfolio application built with **React + Vite** that mimics the macOS operating system interface. This project showcases your skills, projects, and achievements through an immersive desktop-like experience. The application features a fully functional desktop environment with draggable windows, a dock, and various applications accessible from within the portfolio.

---

## 🎨 Key Functionalities

### 1. **Boot Loader & System Initialization**
- **BootLoader Component**: Displays a loading screen when the application starts
- Smooth transition to the main desktop environment
- Creates an authentic macOS startup experience
- Reboot functionality accessible from the navbar logo

### 2. **Navbar (Top Menu Bar)**
- Logo click to trigger system reboot
- Portfolio title display
- Navigation links to key sections
- Consistent macOS-style navigation

### 3. **Dock (Application Launcher)**
- **Interactive Dock**: Dynamic dock with animated icons
- **Hover Effects**: Icons scale up and move upward on mouse hover using GSAP animations
- **Elastic Animation**: Distance-based intensity calculation for smooth hover effects
- **App Launcher**: Click to open various applications/windows
- Shortcuts to all available applications
- Tooltip support for better UX

### 4. **Window Management System**
- **Draggable Windows**: Built with GSAP Draggable plugin
- **Window Controls**: Standard macOS window controls (minimize, maximize, close)
- **Focus Management**: Click window to bring it to front
- **Close Functionality**: Close individual windows
- **Window Wrapper HOC**: Reusable higher-order component for consistent window styling

### 5. **Applications Suite**

#### 📄 **Resume App**
- PDF viewer for your resume
- Integration with `react-pdf` library
- Professional document presentation

#### 🖥️ **Terminal App**
- Tech Stack Display
- Categories: Frontend, Backend, Tools, etc.
- Interactive list with checkmarks
- Styled like a terminal window showing skills and technologies

#### 🌐 **Safari App**
- Placeholder for achievements gallery
- Can display photos and accomplishments
- Future-ready for portfolio achievements showcase

#### 📁 **Finder App**
- **File System Navigation**: Browse through portfolio contents
- **Folder Navigation**: Click folders to navigate deeper
- **Multi-file Type Support**:
  - **PDF Files**: Opens resume viewer
  - **Text Files (.txt)**: Opens in text viewer
  - **Image Files (.img)**: Opens in image viewer
  - **URL Links**: Opens in new browser tab
  - **Figma Files (.fig)**: Opens in new browser tab
- **Active Location Tracking**: Zustand store manages current directory
- **Search Functionality**: Ready for implementation

#### 🖼️ **Gallery App**
- Photo gallery with sidebar categories
- Grid-based image display
- Responsive image layout
- Browse through your portfolio images

#### 📝 **Text Viewer (Textview)**
- View text files (.txt)
- Syntax-aware rendering
- Draggable window support

#### 🖼️ **Image Viewer (Imageview)**
- Full-screen image viewing
- Support for various image formats
- Gallery preview functionality

#### 📂 **Folder Component**
- Visual folder representation
- Icon display
- Hierarchical structure navigation

### 6. **State Management**
- **Zustand Store**: Global state management
  - `window.js`: Manages window state (open windows, focus, active windows)
  - `location.js`: Manages file system location/navigation state
- Redux-free, lightweight approach for performance

### 7. **Advanced Animations**
- **GSAP Animations**: Smooth, high-performance animations
  - Dock icon hover effects with distance-based intensity
  - Window dragging and manipulation
  - Text weight animation on hover
- **Font Variation Animation**: Dynamic font weight changes on mouse movement (Welcome component)

### 8. **UI/UX Features**
- **Responsive Design**: Works across different screen sizes
- **Tailwind CSS**: Modern utility-first styling with Tailwind v4
- **Component Library**: 
  - MDI Icons (`@mdi/react`)
  - Lucide React Icons
  - React Tooltip for UI hints
- **clsx Integration**: Conditional className management for dynamic styling

### 9. **Developer Experience**
- **Alias Imports**: Clean import paths using `#` prefix
- **ESLint Configuration**: Code quality and consistency
- **Hot Module Replacement (HMR)**: Fast development with Vite
- **Build Optimization**: Production-ready build setup

### 10. **Constants & Configuration**
- Centralized constants for:
  - Dock applications
  - Navigation links
  - File system locations
  - Tech stack information
  - Gallery items and photos links

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0**: Latest React with modern hooks
- **Vite 7.2.4**: Lightning-fast build tool and dev server

### Styling
- **Tailwind CSS 4.1.18**: Utility-first CSS framework
- **Tailwind CSS Vite Plugin**: Seamless integration

### Animation & Interactivity
- **GSAP 3.14.2**: Professional-grade animation library
- **GSAP Draggable**: Window dragging functionality
- **@gsap/react**: React integration for GSAP

### State Management
- **Zustand 5.0.9**: Lightweight global state management

### UI Components & Icons
- **Lucide React 0.562.0**: Modern icon library
- **MDI Icons 7.4.47**: Material Design Icons
- **React Tooltip 5.30.0**: Tooltip component library

### Document & Media Handling
- **React PDF 10.3.0**: PDF viewer component
- **dayjs 1.11.19**: Date manipulation library

### Utilities
- **clsx 2.1.1**: Conditional className builder
- **Immer 11.1.3**: Immutable state updates (Zustand integration)

---

## 📁 Project Structure

```
sahil-macOs-portfolio/
├── public/
│   ├── files/           # Portfolio files and documents
│   ├── icons/           # Icon assets
│   └── images/          # Image assets
├── src/
│   ├── apps/            # Application components
│   │   ├── Finder.jsx
│   │   ├── Gallery.jsx
│   │   ├── Terminal.jsx
│   │   ├── Safari.jsx
│   │   ├── Resume.jsx
│   │   ├── Textview.jsx
│   │   └── Imageview.jsx
│   ├── components/      # Reusable components
│   │   ├── BootLoader.jsx
│   │   ├── Dock.jsx
│   │   ├── Navbar.jsx
│   │   ├── Welcome.jsx
│   │   ├── WindowControls.jsx
│   │   └── Folder.jsx
│   ├── hoc/             # Higher-order components
│   │   └── windowWrapper.jsx
│   ├── store/           # Zustand stores
│   │   ├── window.js
│   │   └── location.js
│   ├── constants/       # Configuration and constants
│   ├── App.jsx          # Main app component
│   └── main.jsx         # React entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── eslint.config.js     # ESLint rules
└── package.json         # Dependencies
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm lint
```

### Preview
```bash
npm run preview
```

---

## 💡 Notable Implementation Details

### 1. Window Wrapper HOC
Provides consistent window styling and behavior across all applications through a higher-order component pattern.

### 2. Dynamic File Opening
The Finder intelligently handles different file types:
- PDFs → Resume Viewer
- Text Files → Text Viewer
- Images → Image Viewer
- URLs/Figma → External Browser
- Folders → Navigation

### 3. Zustand State Management
- **window.js**: Tracks open windows, focus state, and window operations
- **location.js**: Manages file system navigation with directory history

### 4. GSAP Animations
- Dock icons use distance-based intensity for smooth hover effects
- Draggable windows with smooth physics
- Font weight animations for interactive text elements

### 5. Alias Imports
Use `#` prefix for cleaner imports:
- `#components` → `./src/components`
- `#apps` → `./src/apps`
- `#store` → `./src/store`
- `#constants` → `./src/constants`

---

## 📋 Future Enhancements

- [ ] Search functionality in Finder
- [ ] More interactive achievements in Safari
- [ ] Terminal command execution
- [ ] Additional macOS-like features
- [ ] Dark/Light theme support
- [ ] Responsive mobile layout

---

## 📝 Notes

- The project uses modern React 19 with hooks
- All windows are draggable and independently managed
- State persists across interactions using Zustand
- Animations are GPU-accelerated using GSAP
- The design closely mimics macOS interface patterns

---

**Created**: April 2026  
**Last Updated**: April 27, 2026
