import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

 
 @Entity()
 export class Roles  {
 
     @PrimaryGeneratedColumn()
     id: number;
 
     @Column()
     nombre: string  
 
     @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
     public created_at: Date;
 
     @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
     public updated_at: Date;

     @OneToMany(()=> User, user => user.roles)
     usuario: User[]
     
 }