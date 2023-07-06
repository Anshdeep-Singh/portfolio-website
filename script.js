// Dummy product data
const products = [
    {
      name: 'My NFT profile',
      image: 'nft.png',
      description: 'Currently featuring 1 Bit Animals, Pixelated Black and White animal NFT',
      link: 'https://opensea.io/anshdeep',
    },
    {
      name: 'Image Classification',
      image: 'cifar10.png',
      description: 'Image classification of 10 different categories using neural networks',
      link: 'https://github.com/Anshdeep-Singh/CIFAR10_Classification',

    },
    {
      name: 'Linkedin Profile',
      image: 'linkedin.png',
      description: 'My linkedin profile. I am a currently pursuing my career in Data Analytics',
      link: 'https://www.linkedin.com/in/AnshdeepSingh369/'
    },
    {
      name: 'Another NFT Profile',
      image: 'nft2.png',
      description: 'It features on of my previous works in NFT. Most viewed was Cards - The Universe collection',
      link: 'https://crypto.com/nft/profile/anshdeep_singh?tab=created'
    },
    
  ];

  // Function to generate product cards dynamically
  function generateProductCards() {
    const productSection = document.querySelector('.product-section');
  
    products.forEach((product) => {
      // Create product card element
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      // Create image element
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      productCard.appendChild(image);
  
      // Create heading element
      const heading = document.createElement('h4');
      heading.textContent = product.name;
      productCard.appendChild(heading);
  
      // Create description element
      const description = document.createElement('p');
      description.textContent = product.description;
      productCard.appendChild(description);
  
      // Create link for product overview page
      const link = document.createElement('a');
      link.href = product.link;
      link.classList.add('btn');
      link.textContent = 'View Details';
      productCard.appendChild(link);
  
      // Append product card to the product section
      productSection.appendChild(productCard);
    });
  }
  
  // Call the function to generate product cards
  generateProductCards();

  const sidebar = document.querySelector('.sidebar');
  const container = document.querySelector('.heading');
  
  container.addEventListener('mouseenter', () => {
    sidebar.classList.add('active');
  });
  
  sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('active');
  });
  
