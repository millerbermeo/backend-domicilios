import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Pedidos } from "./pedidos.entity";

 
 @Entity()
 export class EstadosPedidos {
 
     @PrimaryGeneratedColumn()
     id: number;
 
     @Column()
     nombre: string  
 
     @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
     public created_at: Date;
 
     @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
     public updated_at: Date;

     @OneToMany(()=> Pedidos, (pedidos)=> pedidos.estados)
    pedidos: Pedidos[]     
 }