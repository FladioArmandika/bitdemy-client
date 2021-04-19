export type StyleCursor = 'pointer' | 'auto' | 'default' | 'help' | 'wait' | 'text' | 'move' | 'not-allowed'

export type User = {
    _id: string,
    email: string,
    password: string,
    username: string,
    profileUrl: string,
    courses: Course[],
    // progressVideos: [],
    ratings: Rating[],
}

export enum CourseLevel {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    ADVANCED = 'Advanced',
}

export interface Category {
    _id: string,
    name: string,
    courses: Course[],
}

export interface Course {
    _id?: string,
    name?: string,
    category?: Category,
    levels?: CourseLevel,
    ratings?: Rating[],
    videos?: Video[],
}

export interface Video {
    _id: string,
    title: string,
    description: string,
    course: Course,
    url: string,
    length: number,
}

export interface Rating {
    _id: string,
    user: User,
    course: Course,
    rate: number,
    caption: string,
}