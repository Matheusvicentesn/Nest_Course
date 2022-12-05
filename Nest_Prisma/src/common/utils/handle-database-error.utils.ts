import { DatabaseError } from '../errors/types/DatabaseError';
import { PrismaClientError } from '../errors/types/PrismaClientError';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';

enum PrismaErrors {
  UNiqueConstraintFail = 'P2002',
}

export const handleDatabaseErros = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UNiqueConstraintFail:
      return new UniqueConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};
