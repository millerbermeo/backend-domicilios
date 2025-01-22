import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Repartidor } from "./repartidor.entity";
import { Lugares } from "./lugares.entity";


@Entity()
export class Zonas {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string

    @Column({ nullable: true })
    descripcion: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
  
    @OneToOne(() => Repartidor)
    @JoinColumn()
    repartidor: Repartidor
 
    @OneToMany(()=> Lugares, (lugar)=>lugar.zonas)
    lugares: Lugares[] 

}