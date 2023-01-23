const generateAvatarColor = () => {
  const colors = [
    "#009688",
    "#ffeb3b",
    "#ff5722",
    "#00bcd4",
    "#e91e63",
    "#4e342e",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = { generateAvatarColor };
