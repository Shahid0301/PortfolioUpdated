import React from 'react';

function SocialIcon() {
  // Array of social media icons
  const socialMediaIcons = [
    { name: "linkedin", link: "https://www.linkedin.com/in/shahid-khan-7a97051b8/" },
    { name: "github", link: "https://github.com/Shahid0301" },
    { name: "instagram", link: "https://www.instagram.com/shahid_0301/" }
  ];

  return (
    <div className="flex">
      {socialMediaIcons.map((icon, index) => (
          <SocialMediaIcon key={ index } icon={ icon } />
      ))}
    </div>
  );
}

// Reusable component for social media icons
const SocialMediaIcon = ({ icon }) => (
  <span className="text-4xl text-blue-500 mt-5 bg-white/[0.1] p-5 rounded-full mr-8">
    <a href={icon.link}>
      <i className={`fa-brands fa-${icon.name}`}></i>
    </a>
  </span>
);

export default SocialIcon;
