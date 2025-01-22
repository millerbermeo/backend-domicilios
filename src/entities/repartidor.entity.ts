import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { Pedidos } from './pedidos.entity';
import { EstadoRepartidor } from '../enums/disponibilidad.enum';

@Entity()
export class Repartidor {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pedidos, (pedidos) => pedidos.repartidor)
    pedidos: Pedidos[]

    @Column({ type: 'enum', enum: EstadoRepartidor, default: EstadoRepartidor.DISPONIBLE})
    estado: EstadoRepartidor.OCUPADO | EstadoRepartidor.DISPONIBLE

    @CreateDateColumn({ type: "timestamp" })
    public disponible_desde: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}