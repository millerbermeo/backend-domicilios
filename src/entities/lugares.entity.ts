import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Zonas } from "./zonas.entity";

 @Entity()
 export class Lugares  {
 
     @PrimaryGeneratedColumn()
     id: number;
 
     @Column()
     nombre: string  
     
     @Column({nullable: true})
     direccion: string  
 
     @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
     public created_at: Date;
 
     @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
     public updated_at: Date;

     @OneToMany(()=> Zonas, (zonas)=> zonas.lugares)
     zonas: Lugares
     
 }