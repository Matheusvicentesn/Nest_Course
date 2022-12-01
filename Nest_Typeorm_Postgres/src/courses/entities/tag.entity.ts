import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Course } from './course.entity';
  

  
  @Entity('tags')
  export class Tag {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @ManyToMany(() => Course, (course) => course.tags)
    courses: Course[];
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  

  }