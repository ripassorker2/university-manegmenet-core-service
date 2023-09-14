import { Request, Response } from 'express';

import { AcademicSemester } from '@prisma/client';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicSemesterfiltersFeilds } from './academicSemester.constans';
import { AcademicSemesterServices } from './academicSemester.services';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.createSemester(req.body);

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Aademic semester created successfully!',
    data: result,
  });
});

const getAllSemester = catchAsync(async (req: Request, res: Response) => {
  //
  const filters = pick(req.query, academicSemesterfiltersFeilds);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicSemesterServices.getAllSemester(
    filters,
    paginationOptions
  );

  sendResponse<AcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Getting all semester successfully..!!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterServices.getSingleSemester(id);

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Getting single  semester successfully..!!',
    data: result,
  });
});

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.updateSemester(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semster updated successfully',
    data: result,
  });
});

const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.deleteSemester(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semster delete successfully',
    data: result,
  });
});

export const AcademicSemeterController = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
