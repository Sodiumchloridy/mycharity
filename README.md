# MyCharity
Project for `UM HACKATHON DOMAIN 1` (Team: `Leviathan`)

MyCharity is a modern donation platform leveraging financial technology to make charitable giving more transparent, efficient, and inclusive. The platform focuses on Islamic charitable categories including Waqf, Zakat, and Sadaqah.

## Getting Started

First, install necessary dependencies

```bash
npm run install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is built with Next.js 15 and uses a modern tech stack:

- **Framework**: Next.js with App Router
- **Styling**: TailwindCSS v4
- **Typography**: Geist fonts (Sans and Mono)
- **Language**: TypeScript

Key directories and files:
- `src/app/` - Contains page components and app-wide configurations
- `src/components/` - Reusable UI components (Navbar, Footer, etc.)
- `public/` - Static assets

## Key Features

### Donation Categories
- **Waqf**: Permanent endowments that provide ongoing benefits
- **Zakat**: Religious obligation with calculated distribution
- **Sadaqah**: Voluntary charity for various causes

### Platform Highlights
- **Automated Efficiency**: Smart contracts for fund distribution
- **Inclusive Access**: Support for various payment methods including options for the unbanked
- **Organization Partnerships**: Collaborate with trusted charitable organizations

### User Flows
- Category selection (Waqf, Zakat, Sadaqah)
- Organization selection (e.g., Lembaga Zakat Selangor)
- Payment processing with multiple options
- Donation tracking and impact assessment
- Receipt generation and donation history

## Tech Implementation Notes

- The app uses a responsive design approach for mobile and desktop experiences
- Custom color theming with dark/light mode support
- Impact statistics and transparent reporting built into the user experience