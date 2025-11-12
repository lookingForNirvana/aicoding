# Personal Website

This is a personal website project built with Next.js and deployed on Vercel. It serves as a platform to showcase personal information, projects, and other relevant content.

## Project Structure

```
personal-website
├── src
│   ├── pages
│   │   ├── _app.tsx        # Custom App component
│   │   ├── index.tsx      # Main landing page
│   │   ├── about.tsx      # About page
│   │   └── api
│   │       └── hello.ts    # API route
│   ├── components
│   │   ├── Header.tsx      # Header component
│   │   ├── Footer.tsx      # Footer component
│   │   └── Layout.tsx      # Layout component
│   ├── styles
│   │   ├── globals.css      # Global styles
│   │   └── Home.module.css   # Home page styles
│   └── lib
│       └── api.ts          # API utility functions
├── public
│   └── robots.txt          # Robots.txt for web crawlers
├── .gitignore               # Git ignore file
├── package.json             # NPM configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
├── vercel.json              # Vercel deployment configuration
└── README.md                # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see your website in action.

## Deployment

This project is configured to be deployed on Vercel. To deploy, simply connect your GitHub repository to Vercel, and it will automatically build and deploy your project on every push to the main branch.

## License

This project is open-source and available under the MIT License.