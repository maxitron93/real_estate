import Home1 from '../img/home-1.jpg'
import Home2 from '../img/home-2.jpg'
import Home3 from '../img/home-3.jpg'
import Home4 from '../img/home-4.jpg'
import Home5 from '../img/home-5.jpg'
import Home6 from '../img/home-6.jpg'
import Inside1 from '../img/home-inside-1.jpg'
import Inside2 from '../img/home-inside-2.jpg'
import Inside3 from '../img/home-inside-3.jpg'
import Inside4 from '../img/home-inside-4.jpg'
import Inside5 from '../img/home-inside-5.jpg'
import Inside6 from '../img/home-inside-6.jpg'

const data = [
  {
    id: 1,
    mainImage: Home1,
    subImage1: Inside1,
    subImage2: Inside2,
    subImage3: Inside3,
    subImage4: Inside4,
    address: 'Jalan Sudirman No.100',
    city: 'Jakarta',
    description: 'Aenean bibendum feugiat felis nec tempor. Mauris viverra sed elit sit amet interdum. Etiam diam massa, bibendum eu semper eu, elementum vitae risus. Cras vel porta magna. Nullam pulvinar venenatis dui, nec consequat purus volutpat condimentum. Sed vitae ex id diam volutpat efficitur. Suspendisse at efficitur nunc, at dictum metus. Morbi convallis eget lorem ac vestibulum. In quis interdum arcu. Duis vestibulum commodo egestas. Mauris mollis sapien ut lobortis tincidunt. Aliquam mattis est nunc, eget tristique nibh gravida vitae.',
    bedrooms: 6,
    bathrooms: 4,
    garages: 2,
    price: 500000
  },
  {
    id: 2,
    mainImage: Home2,
    subImage1: Inside6,
    subImage2: Inside5,
    subImage3: Inside4,
    subImage4: Inside3,
    address: 'Jalan Sudirman No.100',
    city: 'Jakarta',
    description: 'Sed tristique sem sed dapibus auctor. Nullam commodo, lorem eu maximus finibus, tellus felis pretium eros, ac facilisis sapien tortor eget felis. Vivamus cursus turpis non erat malesuada, at rhoncus ipsum scelerisque. Mauris suscipit lorem ac leo tincidunt condimentum. Proin nec fringilla lacus. Sed velit metus, pulvinar sit amet nunc vel, ultricies ultricies nibh. Nam suscipit leo non orci pharetra dapibus. Pellentesque pellentesque, ligula non vulputate condimentum, elit erat pellentesque metus, volutpat rhoncus leo felis nec purus. Mauris nec magna viverra, sollicitudin lorem vitae, malesuada felis. Nulla turpis nulla, volutpat vel maximus quis, molestie ut nunc. Praesent nisl dolor, lobortis eget dolor sit amet, pulvinar lacinia massa. Maecenas tortor risus, congue sit amet ultrices quis, lacinia nec ante.',
    bedrooms: 6,
    bathrooms: 4,
    garages: 2,
    price: 134000
  },
  {
    id: 3,
    mainImage: Home3,
    subImage1: Inside3,
    subImage2: Inside5,
    subImage3: Inside1,
    subImage4: Inside6,
    address: 'Jalan Satay No.20',
    city: 'Bali',
    description: 'Curabitur pharetra augue quis lorem elementum mollis. Sed consectetur lorem nibh, non sodales eros dictum in. In blandit ligula nec viverra ullamcorper. Ut lacinia risus at auctor pretium. Sed auctor aliquet tincidunt. Integer vitae commodo arcu. Sed et lacus malesuada magna sagittis blandit non a nulla. Maecenas condimentum dui eu rhoncus commodo. Proin pharetra ornare volutpat. Aliquam erat volutpat. Sed vitae diam sed diam eleifend pretium quis et ex.',
    bedrooms: 4,
    bathrooms: 6,
    garages: 1,
    price: 560000
  },
  {
    id: 4,
    mainImage: Home4,
    subImage1: Inside5,
    subImage2: Inside2,
    subImage3: Inside3,
    subImage4: Inside1,
    address: 'Jalan Masak No.67',
    city: 'Medan',
    description: 'Integer ut libero a sapien tristique semper vel a felis. Duis libero purus, efficitur et interdum vel, lacinia consequat elit. Sed sagittis ullamcorper pretium. Mauris ac sodales mi. Phasellus rhoncus fringilla arcu, elementum varius tellus tincidunt vel. Quisque vel nulla ac leo vehicula venenatis. Sed ultricies ut dolor in gravida. Nullam eget magna sem. Maecenas id augue pellentesque, auctor urna non, tincidunt lorem. Praesent elit risus, fringilla in ullamcorper vel, hendrerit vitae purus. Nulla sit amet lectus dui. Donec ac augue id eros tincidunt vehicula. Aliquam erat volutpat. Proin id luctus neque.',
    bedrooms: 8,
    bathrooms: 3,
    garages: 2,
    price: 780000
  },
  {
    id: 5,
    mainImage: Home5,
    subImage1: Inside1,
    subImage2: Inside6,
    subImage3: Inside2,
    subImage4: Inside3,
    address: 'Jalan Keong No.2',
    city: 'Bali',
    description: 'Vestibulum eget ultricies urna, ut pharetra quam. Sed scelerisque urna non ex fringilla sollicitudin. Integer aliquet scelerisque viverra. Vestibulum at elit tellus. Aliquam erat volutpat. Integer et felis tincidunt, faucibus mauris sed, porttitor felis. Nulla in consectetur nisl. Praesent viverra consectetur ultrices. Ut felis velit, aliquam in dui vel, iaculis luctus mauris. Integer sed mauris pharetra, aliquam elit non, iaculis elit. Curabitur dapibus hendrerit quam, vitae consequat ex molestie sit amet. Fusce ac metus nec nibh viverra condimentum quis quis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam suscipit elementum leo.',
    bedrooms: 3,
    bathrooms: 5,
    garages: 1,
    price: 470000
  },
  {
    id: 6,
    mainImage: Home6,
    subImage1: Inside3,
    subImage2: Inside4,
    subImage3: Inside1,
    subImage4: Inside6,
    address: 'Jalan Subur No.7000',
    city: 'Medan',
    description: 'Mauris consectetur lobortis nisl ultrices scelerisque. Mauris maximus interdum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mi libero, dictum ut mattis non, ullamcorper id magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut dolor feugiat, volutpat quam vel, imperdiet enim. Praesent in turpis non enim tempor convallis. Maecenas ut gravida massa, eget bibendum enim. Suspendisse in elit lacus. Maecenas efficitur interdum ipsum, sed gravida purus fringilla sit amet. Donec et ante ullamcorper, fermentum metus ac, faucibus enim. Phasellus efficitur sem quis dictum rhoncus.',
    bedrooms: 5,
    bathrooms: 4,
    garages: 2,
    price: 685000
  },
]

export { data }
