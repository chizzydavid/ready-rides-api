import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1625553056238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase("readyrides", true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropDatabase("readyrides", true);
    }

}
