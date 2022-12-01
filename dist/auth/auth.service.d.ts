import { SomeEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly userRepo;
    constructor(userRepo: Repository<SomeEntity>);
    validateUser(email: string, pass: string): Promise<any>;
}
