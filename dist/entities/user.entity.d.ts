import { BaseEntity } from 'typeorm';
export declare class SomeEntity extends BaseEntity {
    id: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}
