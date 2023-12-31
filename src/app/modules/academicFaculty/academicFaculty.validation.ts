import { z } from 'zod';

const createFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.',
    }),
  }),
});

const updatefacultyZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const AcademicFacultyValidation = {
  createFacultyZodSchema,
  updatefacultyZodSchema,
};
