import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */



export const users = [
  {
    _id: "4ed82781",
    firstName: "Priyanka",
    lastName: "Prajapati",
    username: "pihu909",
    password: "pihu7845",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Advanced-frontend-developer",
    website:"priyanka-prajapati.netlify.app/",
    avatarUrl:"",
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl: "",
      },
      {
        _id: uuid(),
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
      },
      {
        _id: uuid(),
        firstName: "Pooja",
        lastName: "Singh",
        username: "poojasingh",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl: "",
      },
      {
        _id: uuid(),
        firstName: "Praveen",
        lastName: "Malviya",
        username: "pravy69",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
  },

  // ******************2nd User********************
  {
    _id: "64e9b0e7",
    firstName: "Ankit",
    lastName: "Agarwal",
    username: "ankit123",
    password: "kit123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Aspiring web developer",
    website:"https://www.google.com/",
    avatarUrl:"",
    bookmarks:[],
    following: [
      {
        _id: uuid(),
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "",
      },
      {
        _id: uuid(),
        firstName: "Sakshi",
        lastName: "Kakkar",
        username: "sakshi909",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "",
      },
      {
        _id: uuid(),
        firstName: "Priya",
        lastName: "Yadav",
        username: "preet15",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
      },
    ],
  },

  // *************3rd User**************
  {
    _id: "5e24f83a",
    firstName: "Sakshi",
    lastName: "Kakkar",
    username: "sakshi909",
    password: "uandrk90",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am third user",
    website:"https://www.google.com/",
    avatarUrl:"",
    bookmarks:[],
    followers: [
      {
        _id: uuid(),
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "",
      },
      {
        id: uuid(),
        firstName: "Priya",
        lastName: "Yadav",
        username: "preet15",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
    
      },
    ],
  },

  // *************4th User**********************
  {
    _id: "8975eb7e",
    firstName: "Priya",
    lastName: "Yadav",
    username: "preet15",
    password: "preet1592",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am fourth user",
    website:"https://www.google.com/",
    avatarUrl:"",
    bookmarks:[],
    following: [
      {
        _id: uuid(),
        firstName: "Praveen",
        lastName: "Malviya",
        username: "pravy69",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
    
  },

  // **********5th User************
  {
    _id: "5dc02a81",
    firstName: "Praveen",
    lastName: "Malviya",
    username: "pravy69",
    password: "gandhi@56",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am fifth user",
    website:"https://www.google.com/",
    avatarUrl:"",
    bookmarks:[],
    followers: [
      {
        id: uuid(),
        firstName: "Priya",
        lastName: "Yadav",
        username: "preet15",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Pooja",
        lastName: "Singh",
        username: "poojasingh",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
  },

  // *************6th User**************
  {
    _id: uuid(),
    firstName: "Pooja",
    lastName: "Singh",
    username: "poojasingh",
    password: "poojasingh94",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"I am sixth user",
    website:"https://www.google.com/",
    avatarUrl:"",
    bookmarks:[],
    followers: [
      {
        _id: uuid(),
        firstName: "Priyanka",
        lastName: "Prajapati",
        username: "pihu909",
        avatarUrl: "",
      },
      {
        _id: uuid(),
        firstName: "Ankit",
        lastName: "Agarwal",
        username: "ankit123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
    following:[],
  
  },

  // ************7th User**********
  {
    _id: "5d98463f",
    firstName: "Nupur",
    lastName: "Dey",
    username: "deynupur",
    password: "letsread",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722233/second_wmzgil.jpg",
    followers: [],
    following: [],
    bookmarks: [],
    bio: "I am seventh user",
    portfolio: "https://www.google.com/",
  },
]


