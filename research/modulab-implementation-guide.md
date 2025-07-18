# Modulab Implementation Guide: Modern UI Components

## Quick Start CSS Framework

```css
/* Base Typography System */
:root {
  /* Font Sizes (8pt grid) */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  
  /* Spacing (4px grid) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;
  
  /* Colors (Accessible) */
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-secondary: #64748b;
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;
  
  /* Grays */
  --color-gray-50: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  --color-gray-300: #cbd5e1;
  --color-gray-400: #94a3b8;
  --color-gray-500: #64748b;
  --color-gray-600: #475569;
  --color-gray-700: #334155;
  --color-gray-800: #1e293b;
  --color-gray-900: #0f172a;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* Typography Classes */
.heading-1 {
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  font-weight: 700;
  margin-bottom: var(--space-6);
}

.heading-2 {
  font-size: var(--text-4xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.heading-3 {
  font-size: var(--text-2xl);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.heading-4 {
  font-size: var(--text-xl);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-normal);
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.body-large {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  letter-spacing: var(--tracking-normal);
  font-weight: 400;
}

.body {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-normal);
  font-weight: 400;
}

.body-small {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  font-weight: 400;
}

.caption {
  font-size: var(--text-xs);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  font-weight: 400;
  color: var(--color-gray-600);
}
```

## Button Component System

```css
/* Button Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  user-select: none;
}

/* Button Sizes */
.btn-sm {
  height: 32px;
  padding: 0 var(--space-3);
  font-size: var(--text-sm);
  border-radius: var(--radius-md);
}

.btn-md {
  height: 40px;
  padding: 0 var(--space-4);
  font-size: var(--text-base);
  border-radius: var(--radius-lg);
}

.btn-lg {
  height: 48px;
  padding: 0 var(--space-6);
  font-size: var(--text-base);
  border-radius: var(--radius-lg);
}

.btn-xl {
  height: 56px;
  padding: 0 var(--space-8);
  font-size: var(--text-lg);
  border-radius: var(--radius-xl);
}

/* Button Variants */
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: var(--color-gray-100);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-200);
}

.btn-secondary:hover {
  background-color: var(--color-gray-200);
  border-color: var(--color-gray-300);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-gray-700);
}

.btn-ghost:hover {
  background-color: var(--color-gray-100);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

/* Button States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## Card Component System

```css
/* Card Base */
.card {
  background-color: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-200);
  overflow: hidden;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-gray-200);
}

.card-body {
  padding: var(--space-6);
}

.card-footer {
  padding: var(--space-6);
  border-top: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-50);
}

/* Card Variants */
.card-elevated {
  box-shadow: var(--shadow-lg);
}

.card-elevated:hover {
  box-shadow: var(--shadow-xl);
}

.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  border-color: var(--color-primary);
}
```

## Layout Components

```css
/* Container System */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 768px;
}

.container-lg {
  max-width: 1024px;
}

.container-xl {
  max-width: 1280px;
}

.container-2xl {
  max-width: 1536px;
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

/* Responsive Grid */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* Flexbox Utilities */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
```

## Responsive Typography

```css
/* Fluid Typography */
.hero-title {
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: clamp(1.1, 1.05 + 0.05vw, 1.1);
  letter-spacing: var(--tracking-tight);
  font-weight: 700;
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: clamp(1.2, 1.15 + 0.05vw, 1.2);
  letter-spacing: var(--tracking-tight);
  font-weight: 600;
}

/* Mobile-First Responsive */
@media (min-width: 768px) {
  .heading-1 { font-size: var(--text-6xl); }
  .heading-2 { font-size: var(--text-5xl); }
  .heading-3 { font-size: var(--text-3xl); }
}

@media (min-width: 1024px) {
  .heading-1 { font-size: 4rem; }
  .heading-2 { font-size: var(--text-6xl); }
}
```

## Landing Page Hero Section Example

```html
<section class="hero">
  <div class="container container-lg">
    <div class="hero-content">
      <h1 class="hero-title">
        Build the future of modular development
      </h1>
      <p class="hero-subtitle body-large">
        Create, deploy, and scale modular applications with unprecedented speed and flexibility. 
        Join thousands of developers building the next generation of software.
      </p>
      <div class="hero-actions">
        <a href="#get-started" class="btn btn-primary btn-lg">
          Get Started
        </a>
        <a href="#demo" class="btn btn-outline btn-lg">
          Watch Demo
        </a>
      </div>
    </div>
  </div>
</section>
```

```css
.hero {
  padding: var(--space-20) 0;
  background: linear-gradient(135deg, var(--color-gray-50) 0%, white 100%);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-subtitle {
  color: var(--color-gray-600);
  margin-bottom: var(--space-8);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
  }
}
```

## Feature Section Example

```html
<section class="features">
  <div class="container container-xl">
    <div class="section-header">
      <h2 class="section-title">Why developers choose Modulab</h2>
      <p class="section-subtitle body-large">
        Built by developers, for developers. Experience the difference that modular architecture makes.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="card card-interactive">
        <div class="card-body">
          <div class="feature-icon">
            <!-- Icon here -->
          </div>
          <h3 class="heading-4">Lightning Fast</h3>
          <p class="body">
            Deploy your modules in seconds with our optimized build system and global CDN.
          </p>
        </div>
      </div>
      
      <div class="card card-interactive">
        <div class="card-body">
          <div class="feature-icon">
            <!-- Icon here -->
          </div>
          <h3 class="heading-4">Scalable Architecture</h3>
          <p class="body">
            Build applications that grow with your business using our modular framework.
          </p>
        </div>
      </div>
      
      <div class="card card-interactive">
        <div class="card-body">
          <div class="feature-icon">
            <!-- Icon here -->
          </div>
          <h3 class="heading-4">Developer Experience</h3>
          <p class="body">
            Enjoy first-class tooling, hot reloading, and comprehensive documentation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.features {
  padding: var(--space-20) 0;
  background-color: white;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-subtitle {
  color: var(--color-gray-600);
  max-width: 600px;
  margin: 0 auto;
  margin-top: var(--space-4);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background-color: var(--color-primary);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Performance Optimizations

```css
/* Font Loading Optimization */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-var.woff2') format('woff2');
}

/* Critical CSS */
.critical {
  font-display: swap;
}

/* Reduce Layout Shift */
img, video {
  max-width: 100%;
  height: auto;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus Management */
*:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .card {
    border-width: 2px;
  }
  
  .btn {
    border-width: 2px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This implementation guide provides a solid foundation for Modulab's design system, incorporating modern best practices from leading companies while maintaining accessibility and performance standards.