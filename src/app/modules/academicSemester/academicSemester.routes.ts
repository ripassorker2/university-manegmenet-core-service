import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemeterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/:id', AcademicSemeterController.getSingleSemester);
router.get('/', AcademicSemeterController.getAllSemester);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.createSemesterZodSchema),
  AcademicSemeterController.createSemester
);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.upadateSemesterZodSchema),
  AcademicSemeterController.updateSemester
);
router.delete('/:id', AcademicSemeterController.deleteSemester);

export const AcademicSemeterRoutes = router;
