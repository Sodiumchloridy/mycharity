<div align='center'>
  <img src='https://github.com/user-attachments/assets/0705bdbe-1a6a-47c4-ae47-4cd4e529e079'/>
</div>

> [!NOTE]
> This project was developed for the UM HACKATHON 2025 Domain 1: Enhancing Charity & Donations through Fintech & Technology by Team Leviathan.
>
> **Challenge**: Develop innovative and scalable solutions (plus point: Shariah-compliant) that can be adopted by 
> authorities (such as Waqf and Zakat institutions) and non-profits organisations to enhance governance,
> optimize fund utilization, and create sustainable social impact.

# MyCharity
![image](https://github.com/user-attachments/assets/d312125c-a31c-4d62-9a57-8f971b3126b2)

MyCharity is an Islamic charitable donation platform that modernizes charitable giving through transparent, efficient, and inclusive financial technology with a focus on Islamic charitable categories.

## About

MyCharity provides a comprehensive solution for Muslims to fulfill their charitable obligations and contributions through three main categories:

- **Waqf**: Permanent endowments that generate ongoing benefits for communities
- **Zakat**: Religious obligation with calculated distribution to eligible recipients
- **Sadaqah**: Voluntary charity for various causes and immediate impact

## Getting Started

First, install necessary dependencies

```bash
npm install
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
- `src/app/` - Page components and routing (home, donate, track, dashboard)
- `src/components/` - Reusable UI components (Navbar, DonationForm, etc.)
- `src/app/donate/` - Donation flows for each category (waqf, zakat, sadaqah)
- `src/app/track/` - Donation tracking and impact monitoring features
- `src/app/dashboard/` - User dashboard for donation history and management
- `public/` - Static assets (images, icons, etc.)

## Key Features

### Islamic-Focused Donation Experience
- **Zakat Calculator**: Helps users accurately calculate their Zakat obligations
- **Transparent Distribution**: Allocation tracking across eight prescribed categories
- **Sadaqah Campaigns**: Support urgent relief, education, healthcare, and more
- **Waqf Investment**: Long-term endowment opportunities with ongoing benefits

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
