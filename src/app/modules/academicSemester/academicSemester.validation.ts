import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constans';

const createSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'title is required.',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'semester code is required.',
    }),
    year: z.string({
      required_error: 'year is required',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'start month is required.',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'end month is required.',
    }),
  }),
});

const upadateSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitle] as [string, ...string[]], {
          required_error: 'title is required.',
        })
        .optional(),
      code: z
        .enum([...academicSemesterCode] as [string, ...string[]], {
          required_error: 'semester code is required.',
        })
        .optional(),
      year: z
        .string({
          required_error: 'year is required',
        })
        .optional(),
      startMonth: z
        .enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'start month is required.',
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'end month is required.',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    { message: 'For update title you must be provide title and code.' }
  );

export const AcademicSemesterValidation = {
  createSemesterZodSchema,
  upadateSemesterZodSchema,
};
