//1 задание
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

for (const key in numbers) {
  if (numbers[key] >= 3) {
    console.log(numbers[key]);
  }
}
//2 задание
const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
  {
  userId: 10,
  userName: "Alex",
  text: "lorem ipsum",
  rating: {
  likes: 10,
  dislikes: 2, // вывести это число
  },
  },
  {
  userId: 5, // вывести это число
  userName: "Jane",
  text: "lorem ipsum 2", // вывести этот текст
  rating: {
  likes: 3,
  dislikes: 1,
  },
  },
  ],
  };

  console.log(post.author); // выведет "John"
  console.log(post.comments[0].rating.dislikes); // выведет число 2
  console.log(post.comments[1].userId); // выведет число 5
  console.log(post.comments[1].text); // выведет "lorem ipsum 2"

//3 задание

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach(product => {
  product.price = product.price * 0.85;
});

console.log(products);

//4 задание
const products1 = [
  {
  id: 3,
  price: 127,
  photos: [
  "1.jpg",
  "2.jpg",
  ],
  },
  {
  id: 5,
  price: 499,
  photos: [],
  },
  {
  id: 10,
  price: 26,
  photos: [
  "3.jpg",
  ],
  },
  {
  id: 8,
  price: 78,
  },
  ];

const productsWithPhotos = products1.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

const sortedProducts = products1.sort((a, b) => a.price - b.price);
console.log(sortedProducts);