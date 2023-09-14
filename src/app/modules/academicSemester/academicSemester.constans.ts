import {
  IAcadememcTitle,
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
} from './academicSemester.interface';

export const academicSemesterMonth: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitle: IAcadememcTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const academicSemesterCode: IAcademicSemesterCode[] = ['01', '02', '03'];

export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterSerchFeilds = ['title', 'code', 'year'];
export const academicSemesterfiltersFeilds = [
  'searchTerm',
  'title',
  'code',
  'year',
];
