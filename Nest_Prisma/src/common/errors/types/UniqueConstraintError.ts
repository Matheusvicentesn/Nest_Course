import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;

    super(`A recod with this ${uniqueField} already exists`);
  }
}
