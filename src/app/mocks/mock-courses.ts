import {Course} from '../models/course';

export const COURSES: Course[] = [
    {
        courseID: '1',
        imgUrl: 'url1',
        title: 'course1',
        teacher: 'teacher1',
        ratingStar: 5,
        ratingVotes: 125,
        price: 200,
        priceDiscount: 0
    },
    {
        courseID: '2',
        imgUrl: 'url2',
        title: 'course2',
        teacher: 'teacher1',
        ratingStar: 4,
        ratingVotes: 150,
        price: 199,
        priceDiscount: 180
    },
    {
        courseID: '3',
        imgUrl: 'url3',
        title: 'course3',
        teacher: 'teacher3',
        ratingStar: 4.5,
        ratingVotes: 151,
        price: 200,
        priceDiscount: 190
    },
];
