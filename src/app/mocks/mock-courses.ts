import {Course} from '../models/course';

export const COURSES: Course[] = [
    {
        id: '1',
        imgUrl: 'url1',
        name: 'course1',
        teacher: 'teacher1',
        ratingStar: 5,
        ratingVotes: 125,
        price: 200,
        priceDiscount: 0,
        description: 'my awesome course 1'
    },
    {
        id: '2',
        imgUrl: 'url2',
        name: 'course2',
        teacher: 'teacher1',
        ratingStar: 4,
        ratingVotes: 150,
        price: 199,
        priceDiscount: 180,
        description: 'my awesome course 2'
    },
    {
        id: '3',
        imgUrl: 'url3',
        name: 'course3',
        teacher: 'teacher3',
        ratingStar: 4.5,
        ratingVotes: 151,
        price: 200,
        priceDiscount: 190,
        description: 'my awesome course 3'
    },
];
