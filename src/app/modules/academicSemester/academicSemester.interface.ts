export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcadememcTitle = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCode = '01' | '02' | '03';

export type IAcademicSemester = {
  title: IAcadememcTitle;
  year: string;
  code: IAcademicSemesterCode;
  startMonth: IAcademicSemesterMonth;
  endMonth: IAcademicSemesterMonth;
};

export type IAcademicSemesterFilter = {
  searchTerm?: string;
};
