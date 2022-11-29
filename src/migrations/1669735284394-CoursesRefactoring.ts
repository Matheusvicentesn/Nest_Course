import { MigrationInterface, QueryRunner } from "typeorm"

export class CoursesRefactoring1669735284394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "post" RENAME COLUMN "name" TO "courses"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "post" RENAME COLUMN "courses" TO "name"`,
        )
    }

}
