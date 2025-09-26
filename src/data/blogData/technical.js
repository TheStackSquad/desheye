// src/data/blogData/technical.js

export const technicalBlogPosts = [
  {
    id: "tech-001",
    slug: "is-your-code-ai-generated",
    date: "2025-09-26",
    category: "Technical",
    title: "Is Your Code AI-Generated? Why That's the Wrong Question.",
    excerpt:
      "The value of a modern developer is no longer in manual coding, but in the critical thinking and architecture that guides the solution. We're moving from coders to architects.",

    // Post Metadata
    readTime: "5 min read",
    tags: ["AI", "Web Development", "Future of Coding", "Tech Innovation"],
    featuredImage: "/img/Ai.webp",
    isFeatured: true,

    // Author Metadata
    author: {
      id: "author-001",
      name: "Desheye",
      image: "/img/authors/desh.jpg",
      bio: "Tech visionary writing about the future of web development, AI integration, and the evolving role of developers in the modern tech ecosystem.",
      role: "Senior Developer & Tech Writer",
      social: {
        twitter: "@desheye",
        linkedin: "https://linkedin.com/in/adesheye",
        github: "https://github.com/TheStackSquad/",
      },
    },

    // Content with HTML tags instead of markdown
    content: `
<h1>Is Your Code AI-Generated? Why That's the Wrong Question.</h1>

<p><strong>The evolution of the web developer role from manual coder to high-level system architect.</strong></p>

<p>"Are you even a developer if you're not writing every line yourself?"</p>

<p>That question? It's <strong>vibes</strong> from two generations ago. Let's be honest, in this tech ecosystem—especially here in Lagos—we are moving too fast for that kind of gatekeeping.</p>

<p>The simple truth is, if the biggest thing you worry about is who or what typed the semicolons, then <strong>o ga o!</strong> (meaning: "it's serious/wow!"). You're looking at the wrong part of the stack.</p>

<h2>From Coder to Architect: The Abstraction Sapa</h2>

<p>Twenty years ago, a developer was defined by their mastery of raw syntax. Today, that definition has undergone a full system update. AI tools like Copilot, Claude, and Gemini are not replacing you; they are replacing the <strong>sapa</strong> (poverty/grind) of manually writing repetitive boilerplate.</p>

<p>Think of it this way: Nobody calls a mechanical engineer less of an engineer because they use CAD software instead of a pencil and ruler. The computer handles the tedious drawing; the engineer handles the <strong>design</strong>.</p>

<p>AI is just our new, faster pencil.</p>

<h2>The New Developer Requirements: Vision over Typing</h2>

<p>The value of a web developer is no longer measured in lines of code written, but in the complexity of the problems solved. The focus has shifted from low-level execution to high-level strategy. Your new currency is <strong>critical thinking</strong>.</p>

<p>Here are the three roles that actually define a modern web developer:</p>

<h3>1. The System Architect</h3>
<p>This is your <strong>big boy</strong> role. An AI can write a beautiful function, but it has zero clue how your Next.js frontend should securely talk to your PostgreSQL database, how your caching layer should be structured, or how to handle the logic flow. The modern developer designs the <strong>entire system architecture</strong>—the blueprint. AI is a worker bee; you are the <strong>Chief Architect</strong>.</p>

<h3>2. The Prompt Engineer</h3>
<p>Coding has become a conversational skill. You must know the right questions to ask the AI to get clean, effective, and secure code. If the AI output is slow, buggy, or full of vulnerabilities, it's not the AI's fault; it's the fault of the developer who failed to ask for and validate a clean solution. This requires an even deeper understanding of the code than before.</p>

<h3>3. The Quality Assurance & Integrator</h3>
<p>When multiple AI-generated components meet your existing codebase and, <strong>baba God!</strong>, they start fighting, only a human developer can step in and reconcile the mess. You are the final layer of quality control, security review, and integration sanity. You must possess the foundational knowledge to debug, refactor, and integrate code—regardless of its origin.</p>

<h2>Final Takeaway: Focus on the Vision</h2>

<p>The question is not, "Is your code AI-generated?"</p>

<p>The right question is, <strong>"Did you solve the problem, and is the solution robust, scalable, and secure?"</strong></p>

<p>If you are using cutting-edge tools to deliver better value, faster, and focusing on the high-level design that brings the product to life, then my dear, you are not just a web developer—you are a <strong>tech visionary</strong>.</p>

<p>Now, go and make that money! <strong>E go better!</strong> (meaning: "It will be better/things will be good!")</p>
`,
  },
];
