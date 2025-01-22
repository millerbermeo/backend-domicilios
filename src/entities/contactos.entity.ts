import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Repartidor } from "./repartidor.entity";

 
 @Entity()
 export class Contactos {
 
     @PrimaryGeneratedColumn()
     id: number;
 
     @Column()
     numero: string  
 
     @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
     public created_at: Date;
 
     @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
     public updated_at: Date;


     @OneToOne(()=> Repartidor)
     @JoinColumn()
     repartidor: Repartidor
 }