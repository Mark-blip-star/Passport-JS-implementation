import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinTable, CreateDateColumn, UpdateDateColumn, JoinColumn, BeforeInsert, AfterLoad, EventSubscriber, ManyToOne, Index, RelationId } from 'typeorm';

@Entity('test')
@EventSubscriber()
export class SomeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    name: 'email'
  })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}