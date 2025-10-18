// Import project images
import AneuroImage from './assets/porjects/Aneuro.webp';
import VeloCliqueImage from './assets/porjects/cycles.webp';
import ProBillingSphereImage from './assets/porjects/billing.webp';
import WebBankAppImage from './assets/porjects/bank.webp';
import CrmEcommerceManagementSystemImage from './assets/porjects/crm.webp';
import CarRentalWebsiteImage from './assets/porjects/rent.webp';
import AutomaticTableGeneratorImage from './assets/porjects/table.webp';
import CopyTradingWebsiteImage from './assets/porjects/trading.webp';

export const config = {
  portfolio: {
    portfolioLogo: "Portfolio",
    projectCard: {
      cards: [
        {
          heading: "Aneuro",
          description:
            "Aneuro is a project designed to help businesses and creators connect with their target audience more effectively. The platform engages users through interactive quizzes that analyze their preferences, behaviors, and thought patterns. Based on the results, Aneuro identifies the user's brain type and provides tailored recommendations. These recommendations include the most effective marketing tools, email strategies, prompts, funnels, and other engagement tactics that resonate with each brain type. In other words, Aneuro bridges neuroscience-inspired audience insights with practical marketing strategies, making it easier for businesses to craft campaigns that truly connect with their audience on a psychological level.",
          image: AneuroImage,
          animationDelay: "100",
          buttonLink:
            "https://www.anuro.io",
          buttonText: "CHECK OUT",
        },
         {
           heading: "VéloCliqué",
           description:
             "VéloCliqué is a comprehensive cycling platform designed to connect cycling enthusiasts and provide them with tools to enhance their cycling experience. The platform offers features for tracking rides, connecting with other cyclists, discovering new routes, and managing cycling-related activities. Built with modern web technologies, VéloCliqué aims to create a vibrant community of cyclists while providing practical tools for ride planning, performance tracking, and social interaction within the cycling community.",
           image: VeloCliqueImage,
           animationDelay: "200",
           buttonLink:
             "https://veloclique.com",
           buttonText: "CHECK OUT",
         },
         {
           heading: "Pro Billing Sphere",
           description:
             "Pro Billing Sphere is an advanced invoicing and billing management platform designed to streamline the process of creating, customizing, and sending invoices. The system allows users to create and manage invoices with ease, send invoices directly to clients via email or other channels, use a library of customizable invoice templates to match branding and style, edit templates and invoice details such as logo, colors, layout, and content, and keep track of sent invoices and payment status.",
           image: ProBillingSphereImage,
           animationDelay: "400",
           buttonLink:
             "https://probillingsphere.com",
           buttonText: "CHECK OUT",
         },
         {
          heading: "Web Bank App",
          description:
            "Web Bank App is a role-based online banking and financial management platform designed to support structured access, company oversight, and streamlined collaboration across various user types. It offers a secure and scalable environment for handling digital banking operations with multi-level permissions.",
          image: WebBankAppImage,
           animationDelay: "600",
          buttonLink: "",
          buttonText: "CHECK OUT",
        },
         {
           heading: "CRM & eCommerce Management System",
           description:
             "The CRM & eCommerce Management System is a unified platform designed to streamline business operations by combining customer relationship management with powerful store and product management capabilities. This project features a modern dashboard interface that gives admins and team members real-time insights into customer interactions, tasks, project statuses, and team performance. The CRM side includes tools for managing leads, deals, clients, tasks, and internal workflows — all aimed at boosting productivity and improving customer service.",
           image: CrmEcommerceManagementSystemImage,
           animationDelay: "700",
           buttonLink: "",
           buttonText: "CHECK OUT",
         },
        {
          heading: "CAR RENTAL website",
          description:
            "Project description. A car rental website is an online platform that allows customers to rent vehicles for a set period of time. Thiswebsite typically includes vehicle inventory, location information and customer support",
          image: CarRentalWebsiteImage,
          animationDelay: "900",
          buttonLink: "",
          buttonText: "CHECK OUT",
        },
        {
          heading: "Automatic Table Generator",
          description:
            "The Automatic Table Generator is a versatile tool built with Next.js and Tailwind CSS that dynamically generates tables in multiple formats, including JSON, CSV, Excel, and PDF. It allows users to input or fetch data from APIs and display it in a structured table with sorting, filtering, and export options. Designed for efficiency, it simplifies data visualization and enhances productivity by supporting real-time updates and custom styling. Ideal for developers, analysts, and businesses needing quick and flexible table generation.",
          image: AutomaticTableGeneratorImage,
           animationDelay: "800",
          buttonLink: "https://auto-table-generator-lilg.vercel.app/",
          buttonText: "CHECK OUT",
        },
        {
          heading: "Copy Trading ",
          description:
            "The Copy Trading Website is a comprehensive platform designed to connect traders with professional copy traders. Built with Next.js, Tailwind CSS, and MongoDB, it provides a seamless user experience for searching, comparing, and selecting copy traders based on expertise, performance, and investment strategies. Key features include trader search functionality, portfolio tracking, risk management tools, real-time performance analytics, and secure payment integrations. The platform ensures transparency and accountability, enabling users to make informed decisions and maximize their trading results.",
          image: CopyTradingWebsiteImage,
           animationDelay: "800",
          buttonLink: "https://auto-table-generator-lilg.vercel.app/",
          buttonText: "CHECK OUT",
        },
        // {
        //   heading: "Social Pro",
        //   description:
        //     "The Social Pro Editor is an advanced content creation tool designed for seamless editing and publishing of social media posts. Built with React.js, it offers a rich-text editor and image editor with real-time formatting, media embedding, and AI-powered suggestions. Users can draft, edit, preview, and schedule posts across multiple platforms.Social Pro Editor streamlines content management for individuals and businesses. ",
        //   animationDelay: "900",
        //   buttonLink: "",
        //   buttonText: "CHECK OUT",
        // },
        // {
        //   heading: "Brokerage Website",
        //   description:
        //     "The Brokerage Website is a comprehensive platform designed to connect investors with licensed brokers. Built with Next.js, Tailwind CSS, and MongoDB, it provides a seamless user experience for searching, comparing, and selecting brokers based on expertise, ratings, and services offered. Key features include broker search functionality, real-time market insights, user authentication, investment calculators, and secure API integrations. The platform ensures transparency and efficiency, making it easier for users to navigate the brokerage landscape and make informed financial decisions.",
        //   animationDelay: "900",
        //   buttonLink: "",
        //   buttonText: "CHECK OUT",
        // },
        // {
        //   heading: "ASI Insurance Platform",
        //   description:
        //     "The ASI Insurance Platform is a modern web application designed to simplify the process of exploring, comparing, and purchasing insurance policies. Built with Next.js, Tailwind CSS, and MongoDB, it offers a user-friendly interface for individuals and businesses to find the best coverage options. Key features include policy search, quote generation, claims management, user authentication, and secure payment integrations. With real-time updates and automated assistance, the platform enhances the insurance experience by providing transparency, efficiency, and ease of access.",
        //   animationDelay: "900",
        //   buttonLink: "",
        //   buttonText: "CHECK OUT",
        // },
      ],
    },
    internships: {
      internship: [
        {
          companyName: "INFOTEX PVT LTD",
          role: "Front-end Developer",
          introText: "",
          duration: "01/12/2024 - 29/03/2025",
          keyPointOne: "Built front-end of multiple website using ReactJS",
          keyPointTwo: "",
          keyPointThree: "",
          keyPointFour: "",
          offsetValue: "0",
        },
        // {
        //   companyName: "Company Name",
        //   role: "Front-end Developer",
        //   introText: "",
        //   duration: "14/06/2021 - 14/07/2021",
        //   keyPointOne: "Built front-end of multiple website using ReactJS.",
        //   keyPointTwo: "Add few lines here... if requried",
        //   keyPointThree: "Add few lines here... if requried",
        //   keyPointFour:
        //     "Add few lines here... if requried Lorem, ipsum dolor sit amet consectetur adipisicing cto molestiae.",
        //   offsetValue: "-1000",
        // },
        // {
        //   companyName: "Company Name",
        //   role: "Front-end Developer",
        //   introText: "",
        //   duration: "10/09/2020 - 10/11/2020",
        //   keyPointOne: "Add few lines here... if requried",
        //   keyPointTwo: "Add few lines here... if requried",
        //   keyPointThree: "Add few lines here... if requried",
        //   keyPointFour: "",
        //   offsetValue: "-1000",
        // },
      ],
    },
  },
};

export default config;
